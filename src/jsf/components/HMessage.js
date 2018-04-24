import React from 'react';
import PropTypes from 'prop-types';
import JsfElement from '../superclass/JsfElement';

export default class HMessage extends JsfElement {
  static propTypes = {
    id: PropTypes.string,
    for: PropTypes.string.isRequired,
    styleClass: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const input = this.context.getInput(this.props.for);
    let show = input.hasError;
    return (
        <span className={show ? this.props.styleClass : ''}
              id={this.state.id}>
          {show ? input.errorMessage : <span id={this.state.id}/>}
      </span>);
  }
}

HMessage.contextTypes = {
  getFormId: PropTypes.func,
  getInput: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
};
