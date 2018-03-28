"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationResponse =
/**
 *
 * @param {boolean} err
 * @param {string} message
 */
function ValidationResponse(err, message) {
  _classCallCheck(this, ValidationResponse);

  this.error = err;
  this.message = message;
};

exports.default = ValidationResponse;