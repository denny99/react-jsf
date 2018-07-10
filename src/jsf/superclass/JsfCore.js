import React from 'react';
import ValidationResponse from '../responses/ValidationResponse';
import FEvent from '../components/FEvent';
import FAjax from '../components/FAjax';
import FConvertNumber from '../components/FConvertNumber';
import FFacet from '../components/FFacet';
import FValidateRegex from '../components/FValidateRegex';

export class JsfCore extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.events = [];
    this.ajaxCalls = [];
    this.validators = [];

    React.Children.forEach(this.props.children, (child) => {
      if (child.type === FEvent) {
        this.events.push(new child.type(child.props, context));
      }
      if (child.type === FAjax) {
        child = React.cloneElement(child, {
          this: this,
        });
        this.ajaxCalls.push(new child.type(child.props, context));
        return;
      }
      if (child.type === FFacet) {
        this[child.props.name] = child.props.children;
        return;
      }
      if (child.type === FValidateRegex) {
        this.validators.push(new child.type(child.props, context));
        return;
      }
      if (child.type === FConvertNumber) {
        this.converter = new child.type(child.props, context);
      }
    });

    context.registerAtAll(this);
    this.handleAjax = this.handleAjax.bind(this);
  }

  async jsfOnRender() {
  }

  /**
   * triggers a specific event
   * @param {string} type
   * @return {ValidationResponse}
   */
  async triggerEvent(type) {
    for (const event of this.events) {
      if (event.props.type === type) {
        return event.props.listener(this);
      }
    }
    return new ValidationResponse(false);
  }

  /**
   *
   * @param {string} event
   * @return {FAjax}
   */
  ajax(event) {
    for (const ajax of this.ajaxCalls) {
      if (ajax.props.event === event) {
        return ajax;
      }
    }
    return null;
  }

  /**
   *
   * @return {object}
   */
  handleAjax() {
    let props = {};
    // TODO merge existing properties
    for (const ajax of this.ajaxCalls) {
      switch (ajax.props.event) {
        case 'blur':
          props.onBlur = () => {
            ajax.call(this);
          };
          break;
        default:
          props.onClick = () => {
            ajax.call(this);
          };
          break;
      }
    }
    return props;
  }
}