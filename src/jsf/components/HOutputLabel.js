import React from 'react';
import PropTypes from 'prop-types';
import Output from '../superclass/Output';

export default class HOutputLabel extends Output {
  static propTypes = {
    id: PropTypes.string,
    for: PropTypes.string,
    style: PropTypes.object,
    styleClass: PropTypes.string,
  };

  render() {
    let forId = this.context ?
        this.context.getFormId(this.props.for) :
        this.props.for;
    return (
        <label className={this.props.styleClass} htmlFor={forId}
               id={this.state.id} style={this.props.style}>
          {this.props.children}</label>
    );
  }
}

HOutputLabel.contextTypes = {
  getFormId: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
};
