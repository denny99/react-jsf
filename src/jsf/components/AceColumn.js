import React from 'react';
import JsfElement from '../superclass/JsfElement';
import FFacet from './FFacet';
import PropTypes from 'prop-types';

export default class AceColumn extends JsfElement {
  static propTypes = {};

  constructor(props, context) {
    super(props, context);
    React.Children.forEach(this.props.children, (child) => {
      if (!(child.type === FFacet && child.props.name === 'header')) {
        this.column = child;
      }
    });
  }
}

AceColumn.contextTypes = {
  getFormId: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
};