import React from 'react';
import PropTypes from 'prop-types';

export default class FAjax extends React.Component {
  static propTypes = {
    event: PropTypes.string,
    execute: PropTypes.string,
    render: PropTypes.string,
    listener: PropTypes.func.isRequired,
    this: PropTypes.object,
  };

  static defaultProps = {
    execute: '@this',
    render: '@this',
    event: 'click',
  };

  constructor(props, context) {
    super(props, context);

    this.call = this.call.bind(this);
  }

  /**
   * @param {JsfCore} caller
   * @return {Promise<void>}
   */
  async call(caller) {
    let obj;
    let renderElem;
    switch (this.props.execute) {
      case '@form':
        obj = this.context.form;
        break;
      case '@all':
        obj = this.context.all;
        break;
      default:
        obj = this.props.this;
        break;
    }

    switch (this.props.render) {
        // @all is no longer useful, the ajax function itself is contained in the page component itself which is basically @all
      case '@all':
        renderElem = this.context.all;
        break;
      case '@form':
        renderElem = this.context.form;
        break;
      case '@this':
      default:
        renderElem = caller;
        break;
    }

    await this.props.listener(obj, renderElem);
  }
}

FAjax.contextTypes = {
  all: PropTypes.any,
  form: PropTypes.any,
};