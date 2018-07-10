import React from 'react';
import {JsfCore} from './JsfCore';

export default class JsfElement extends JsfCore {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: (context.getFormId) ?
          context.getFormId(this.props.id) :
          this.props.id
    };

    if (this.props.converter) {
      this.converter = new this.props.converter();
    }

    // elements might be outside of a form
    if (context.registerAtForm) {
      context.registerAtForm(this);
    }
  }
}