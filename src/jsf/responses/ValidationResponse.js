export default class ValidationResponse {
  /**
   *
   * @param {boolean} err
   * @param {string} [message]
   * @param {string} [elemId]
   */
  constructor(err, message, elemId) {
    this.error = err;
    this.message = message;
    this.elementId = elemId;
  }
}