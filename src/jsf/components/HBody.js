import React from 'react';
import PropTypes from 'prop-types';

export default class HBody extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.jsfElements = [];

    this.register = this.register.bind(this);
  }

  render() {
    return this.props.children;
  }

  /**
   *
   * @param {JsfCore} elem
   */
  register(elem) {
    this.jsfElements.push(elem);
  }

  async jsfOnRender() {
    try {
      for (const element of this.jsfElements) {
        await element.jsfOnRender(true);
      }
    } catch (e) {
      console.error(e);
    }
  }

  getChildContext() {
    return {
      all: this,
      registerAtAll: this.register,
    };
  }
}

HBody.childContextTypes = {
  registerAtAll: PropTypes.func,
  all: PropTypes.instanceOf(HBody),
};