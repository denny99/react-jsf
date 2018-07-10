import React from 'react';
import PropTypes from 'prop-types';
import ObjectTraverser from '../util/ObjectTraverser';
import {JsfCore} from '../superclass/JsfCore';
import HBody from './HBody';

export default class HForm extends JsfCore {
  static propTypes = {
    id: PropTypes.string,
    styleClass: PropTypes.string,
    data: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      inputs: {},
      data: this.props.data,
    };

    this.jsfElements = [];

    this.registerInput = this.registerInput.bind(this);
    this.registerAtForm = this.registerAtForm.bind(this);
    this.getFormId = this.getFormId.bind(this);
    this.property = this.property.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  render() {
    return (
        <form id={this.props.id} name={this.props.id}
              className={this.props.styleClass}>
          {this.props.children}
        </form>);
  }

  /**
   * @param {string} forId
   * @return {Input}
   */
  getInput(forId) {
    return this.state.inputs[forId] || {hasError: false};
  }

  /**
   * combined getter and setter for form data
   * @param {string} propertyName
   * @param {string} [value]
   * @return {Object}
   */
  property(propertyName, value) {
    let result = ObjectTraverser.traverse(this.state.data, propertyName, value);
    // only update state when update occurred!
    if (result === null && value !== undefined) {
      this.setState({
        data: this.state.data,
      });
    }
    // in case we did not find a value return empty string
    return result !== null ? result : '';
  }

  getChildContext() {
    return {
      registerInput: this.registerInput,
      registerAtForm: this.registerAtForm,
      registerAtAll: this.context.registerAtAll,
      getFormId: this.getFormId,
      property: this.property,
      all: this.context.all,
      form: this,
      getInput: this.getInput,
    };
  }

  /**
   * build form id
   * @param {string} [id]
   * @return {string}
   */
  getFormId(id) {
    if (id) {
      return `${this.props.id}:${id}`;
    } else {
      return '';
    }
  }

  /**
   * checks for any error inside of the form
   * @return {boolean}
   */
  async validateInputs() {
    let valid = true;
    for (const key in this.state.inputs) {
      if (this.state.inputs.hasOwnProperty(key)) {
        let input = this.state.inputs[key];
        let response = await input.validate();

        if (response.hasError) {
          valid = false;
        }
      }
    }

    return valid;
  }

  /**
   * validate form elements
   * @param {boolean} [skipInputs]
   * @returns {Promise<boolean>} true if ok
   */
  async validate(skipInputs) {
    let valid = true;

    // grab events and validate

    if (!skipInputs) {
      valid = await this.validateInputs();
    }

    if (valid) {
      const result = await this.triggerEvent('postValidate');
      valid = !result.error;
      let input = this.getInput(result.elementId);
      input.hasError = result.error;
      input.errorMessage = result.message;
    }

    this.setState({
      inputs: this.state.inputs,
    });

    return valid;
  }

  /**
   *
   * @param {Input} element
   */
  registerInput(element) {
    this.state.inputs[element.props.id] = element;
    this.setState({
      inputs: this.state.inputs,
    });
  }

  registerAtForm(element) {
    this.jsfElements.push(element);
  }

  async jsfOnRender(skipChildren) {
    try {
      if (!skipChildren) {
        for (const element of this.jsfElements) {
          await element.jsfOnRender();
        }
      }
      await this.validate(true);
    } catch (e) {
      console.error(e);
    }
  }
}

HForm.childContextTypes = {
  getInput: PropTypes.func,
  registerInput: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
  getFormId: PropTypes.func,
  property: PropTypes.func,
  all: PropTypes.instanceOf(HBody),
  form: PropTypes.instanceOf(HForm),
};

HForm.contextTypes = {
  registerAtAll: PropTypes.func,
  all: PropTypes.instanceOf(HBody),
};