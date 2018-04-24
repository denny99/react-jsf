import JsfElement from './JsfElement';

export default class Output extends JsfElement {
  constructor(props, context) {
    super(props, context);
  }

  /**
   * @return {object| number | string}
   */
  get value() {
    let value = this.props.value;

    // only convert if requested input not empty
    value = this.converter && typeof value !== 'string' ?
        this.converter.getAsString(value) :
        value;

    return value;
  }

  /**
   * checks if the current input can be converted
   * @returns {boolean}
   */
  converterError() {
    if (!this.converter) {
      return false;
    }
    try {
      typeof this.value !== 'object' ?
          this.converter.getAsObject(this.value) :
          this.value;
      return false;
    } catch (e) {
      return true;
    }
  }
}