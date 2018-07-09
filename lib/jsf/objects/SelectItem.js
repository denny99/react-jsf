"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * represents an select option
 */
var SelectItem =
/**
 *
 * @param {string | number | object} value option value
 * @param {string} label option text
 */
function SelectItem(value, label) {
  _classCallCheck(this, SelectItem);

  this.value = value;
  this.label = label;
};

exports.default = SelectItem;