'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _JsfCore2 = require('./JsfCore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JsfElement = function (_JsfCore) {
  _inherits(JsfElement, _JsfCore);

  function JsfElement(props, context) {
    _classCallCheck(this, JsfElement);

    var _this = _possibleConstructorReturn(this, (JsfElement.__proto__ || Object.getPrototypeOf(JsfElement)).call(this, props, context));

    _this.state = {
      id: context.getFormId ? context.getFormId(_this.props.id) : _this.props.id
    };

    if (_this.props.converter) {
      _this.converter = new _this.props.converter();
    }

    // elements might be outside of a form
    if (context.registerAtForm) {
      context.registerAtForm(_this);
    }
    return _this;
  }

  return JsfElement;
}(_JsfCore2.JsfCore);

exports.default = JsfElement;