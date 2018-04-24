import React from 'react';
import FAjax from '../components/FAjax';
import FFacet from '../components/FFacet';
import FValidateRegex from '../components/FValidateRegex';
import FConvertNumber from '../components/FConvertNumber';
import JsfCore from './JsfCore';

export default class JsfElement extends JsfCore {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: (context.getFormId) ?
          context.getFormId(this.props.id) :
          this.props.id,
      children: [],
    };

    // convert children
    React.Children.forEach(this.props.children, (child) => {
      let object;
      if (child.type === FAjax) {
        child = React.cloneElement(child, {
          this: this,
        });
        object = new child.type(child.props, context);
        this.ajax = object;
        return;
      }
      if (child.type === FFacet) {
        this[child.props.name] = child.props.children;
        return;
      }
      if (child.type === FValidateRegex) {
        object = new child.type(child.props, context);
        this.state.children.push(object);
        return;
      }
      if (child.type === FConvertNumber) {
        this.converter = new child.type(child.props, context);
      }
    });

    if (this.props.converter) {
      this.converter = new this.props.converter();
    }

    // elements might be outside of a form
    if (context.registerAtForm) {
      context.registerAtForm(this);
    }

    this.handleAjax = this.handleAjax.bind(this);
  }



  /**
   *
   * @return {object}
   */
  handleAjax() {
    let props = {};
    // TODO merge existing properties
    if (this.ajax) {
      switch (this.ajax.props.event) {
        case 'blur':
          props.onBlur = () => {
            this.ajax.call(this);
          };
          break;
        default:
          props.onClick = () => {
            this.ajax.call(this);
          };
          break;
      }
    }
    return props;
  }
}