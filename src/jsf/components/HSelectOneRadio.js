import React from 'react';
import PropTypes from 'prop-types';
import SelectOne from '../superclass/SelectOne';

export default class HSelectOneRadio extends SelectOne {
  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    layout: PropTypes.string,
    styleClass: PropTypes.string,
    style: PropTypes.object,
    requiredMessage: PropTypes.string,
    required: PropTypes.bool,
    converter: PropTypes.func,
    converterMessage: PropTypes.string,
  };

  render() {
    return (
        <table className={this.props.styleClass}
               id={this.state.id} style={this.props.style}>
          <tbody>
          {this.props.children}
          </tbody>
        </table>
    );
  }
}

HSelectOneRadio.contextTypes = {
  registerInput: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
  getFormId: PropTypes.func,
  property: PropTypes.func,
};

HSelectOneRadio.childContextTypes = {
  registerInput: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
  getFormId: PropTypes.func,
  property: PropTypes.func,
  currentValue: PropTypes.any,
  parent: PropTypes.instanceOf(HSelectOneRadio),
};