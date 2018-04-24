import React from 'react';
import Input from './Input';
import FSelectItem from '../components/FSelectItem';
import FSelectItems from '../components/FSelectItems';

export default class SelectOne extends Input {
  constructor(props, context) {
    super(props, context);

    this.getCurrentValue = this.getCurrentValue.bind(this);
  }

  componentDidMount() {
    // if value is unset the first children is the one selected per default
    if (this.value === null || this.value === '') {
      let selectedChild = React.Children.toArray(this.props.children)[0];
      if (selectedChild.type === FSelectItem) {
        this.value = selectedChild.props.value;
      }
      if (selectedChild.type === FSelectItems) {
        this.value = selectedChild.props.value[0].value;
      }
    }
  }

  getCurrentValue() {
    return this.context.property(this.props.value);
  }

  getChildContext() {
    return {
      getFormId: (key) => {
        return key ? `${this.state.id}:${key}` : this.state.id;
      },
      property: this.context.property,
      currentValue: this.getCurrentValue,
      parent: this,
      registerAtAll: this.context.registerAtAll,
      registerAtForm: this.context.registerAtForm,
    };
  }
}