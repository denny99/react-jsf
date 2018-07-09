'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HInputText = require('./HInputText');

var _HInputText2 = _interopRequireDefault(_HInputText);

var _Input2 = require('../superclass/Input');

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HInputHidden = function (_Input) {
  _inherits(HInputHidden, _Input);

  function HInputHidden() {
    _classCallCheck(this, HInputHidden);

    return _possibleConstructorReturn(this, (HInputHidden.__proto__ || Object.getPrototypeOf(HInputHidden)).apply(this, arguments));
  }

  _createClass(HInputHidden, [{
    key: 'render',
    value: function render() {
      var props = JSON.parse(JSON.stringify(this.props));
      props.type = 'hidden';
      return _react2.default.createElement(_HInputText2.default, props, this.props.children);
    }
  }]);

  return HInputHidden;
}(_Input3.default);

HInputHidden.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  style: _propTypes2.default.object,
  styleClass: _propTypes2.default.string,
  validator: _propTypes2.default.func,
  validatorMessage: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  requiredMessage: _propTypes2.default.string,
  converter: _propTypes2.default.func,
  converterMessage: _propTypes2.default.string,
  onchange: _propTypes2.default.func
};
exports.default = HInputHidden;


HInputHidden.contextTypes = {
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
  registerInput: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func
};