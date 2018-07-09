'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _JsfElement2 = require('./JsfElement');

var _JsfElement3 = _interopRequireDefault(_JsfElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Output = function (_JsfElement) {
  _inherits(Output, _JsfElement);

  function Output(props, context) {
    _classCallCheck(this, Output);

    return _possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).call(this, props, context));
  }

  /**
   * @return {object| number | string}
   */


  _createClass(Output, [{
    key: 'converterError',


    /**
     * checks if the current input can be converted
     * @returns {boolean}
     */
    value: function converterError() {
      if (!this.converter) {
        return false;
      }
      try {
        _typeof(this.value) !== 'object' ? this.converter.getAsObject(this.value) : this.value;
        return false;
      } catch (e) {
        return true;
      }
    }
  }, {
    key: 'value',
    get: function get() {
      var value = this.props.value;

      // only convert if requested input not empty
      value = this.converter && typeof value !== 'string' ? this.converter.getAsString(value) : value;

      return value;
    }
  }]);

  return Output;
}(_JsfElement3.default);

exports.default = Output;