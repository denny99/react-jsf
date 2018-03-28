import React from 'react';
import PropTypes from 'prop-types';
import HSelectBooleanCheckbox from './HSelectBooleanCheckbox';

export default class IceSelectBooleanCheckbox extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    styleClass: PropTypes.string,
    validator: PropTypes.func,
  };

  render() {
    return (<HSelectBooleanCheckbox
        styleClass={`iceSelBoolChkbx ${this.props.styleClass}`}
        id={this.props.id}
        value={this.props.value} style={this.props.style}
        validator={this.props.validator}/>);
  }
}

IceSelectBooleanCheckbox.contextTypes = {
  updateMessages: PropTypes.func,
  getFormId: PropTypes.func,
  property: PropTypes.func,
};