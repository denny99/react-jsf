"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiResponse =
/**
 *
 * @param {number} [offset]
 * @param {number} [limit]
 * @param {number} [max]
 * @param {object | object[]} [data]
 */
function ApiResponse(offset, limit, max, data) {
  _classCallCheck(this, ApiResponse);

  this.offset = offset === undefined ? 0 : offset;
  this.limit = limit === undefined ? 0 : limit;
  this.max = max === undefined ? 0 : max;
  this.data = data === undefined ? [] : data;
};

exports.default = ApiResponse;