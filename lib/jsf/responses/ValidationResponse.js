'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var ValidationResponse =
    /**
     *
     * @param {boolean} err
     * @param {string} [message]
     * @param {string} [elemId]
     */
    function ValidationResponse(err, message, elemId) {
      _classCallCheck(this, ValidationResponse);

      this.error = err;
      this.message = message;
      this.elementId = elemId;
    };

exports.default = ValidationResponse;