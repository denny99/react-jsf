import React from 'react';
import PropTypes from 'prop-types';
import HBody from './HBody';

export default class FEvent extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    listener: PropTypes.func.isRequired,
  };

  render() {
    return null;
  }
}

FEvent.contextTypes = {
  all: PropTypes.instanceOf(HBody),
  // circular imports, so just call it object
  form: PropTypes.object,
};