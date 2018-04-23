import React from 'react';
import PropTypes from 'prop-types';

export default class UiDefine extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return this.props.children;
  }
}