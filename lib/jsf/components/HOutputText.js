'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Output2 = require('../superclass/Output');

var _Output3 = _interopRequireDefault(_Output2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HOutputText = function (_Output) {
  _inherits(HOutputText, _Output);

  function HOutputText() {
    _classCallCheck(this, HOutputText);

    return _possibleConstructorReturn(this, (HOutputText.__proto__ || Object.getPrototypeOf(HOutputText)).apply(this, arguments));
  }

  _createClass(HOutputText, [{
    key: 'render',
    value: function render() {
      if (this.props.rendered !== false) {
        return _react2.default.createElement(
          'span',
          { className: this.props.styleClass, style: this.props.style,
            id: this.state.id },
          this.props.hasOwnProperty('value') && this.props.value !== undefined ? this.value : this.props.children
        );
      }
      return null;
    }
  }]);

  return HOutputText;
}(_Output3.default);

HOutputText.propTypes = {
  id: _propTypes2.default.string,
  styleClass: _propTypes2.default.string,
  style: _propTypes2.default.object,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.number]),
  type: _propTypes2.default.string,
  // should implement converter!
  converter: _propTypes2.default.func,
  rendered: _propTypes2.default.bool
};
exports.default = HOutputText;


HOutputText.contextTypes = {
  getFormId: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func
};