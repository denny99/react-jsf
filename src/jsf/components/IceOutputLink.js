import React from 'react';
import PropTypes from 'prop-types';
import Output from '../superclass/Output';

export default class IceOutputLink extends Output {
  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    styleClass: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    return (
        <a className={`iceOutLnk ${this.props.styleClass}`}
           href={this.value} id={this.props.id} type={this.props.type}>
          {this.props.children}
        </a>
    );
  }
}

IceOutputLink.contextTypes = {
  getFormId: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
};
