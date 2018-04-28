import React from 'react';
import PropTypes from 'prop-types';
import JsfElement from '../superclass/JsfElement';
import HForm from './HForm';

export default class HCommandButton extends JsfElement {
  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    immediate: PropTypes.bool,
    style: PropTypes.object,
    styleClass: PropTypes.string,
    action: PropTypes.func,
    actionArgument: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  constructor(props, context) {
    super(props, context);

    this.action = this.action.bind(this);
  }

  /**
   * on click action
   * gather data from parent form
   * @param {Event} e
   */
  async action(e) {
    // jsf used form, but we don't wanna submit them in react
    e.preventDefault();
    if (!this.props.immediate) {
      // check if form is ok
      if (!await this.context.form.validate()) {
        return;
      }

      if (this.ajax('click')) {
        await this.ajax('click').call(this);
      }
    }
    // argument might be undefined
    this.props.action(this.props.actionArgument);
  }

  render() {
    return (
        <input className={this.props.styleClass} id={this.state.id}
               style={this.props.style}
               name={this.props.id} type="submit" value={this.props.value}
               onClick={this.action}/>
    );
  }
}

HCommandButton.contextTypes = {
  getFormId: PropTypes.func,
  form: PropTypes.instanceOf(HForm),
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
};