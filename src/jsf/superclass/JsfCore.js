import React from 'react';
import ValidationResponse from '../responses/ValidationResponse';
import FEvent from '../components/FEvent';

export default class JsfCore extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.events = [];

    React.Children.forEach(this.props.children, (child) => {
      if (child.type === FEvent) {
        this.events.push(new child.type(child.props, context));
      }
    });

    context.registerAtAll(this);
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
}