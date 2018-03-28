'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HCommandButton = require('./HCommandButton');

var _HCommandButton2 = _interopRequireDefault(_HCommandButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IceCommandButton = function (_React$Component) {
  _inherits(IceCommandButton, _React$Component);

  function IceCommandButton() {
    _classCallCheck(this, IceCommandButton);

    return _possibleConstructorReturn(this, (IceCommandButton.__proto__ || Object.getPrototypeOf(IceCommandButton)).apply(this, arguments));
  }

  _createClass(IceCommandButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_HCommandButton2.default, { id: this.props.id, value: this.props.value,
        immediate: this.props.immediate,
        style: this.props.style,
        styleClass: 'iceCmdBtn ' + this.props.styleClass,
        action: this.props.action,
        actionArgument: this.props.actionArgument });
    }
  }]);

  return IceCommandButton;
}(_react2.default.Component);

IceCommandButton.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  immediate: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  styleClass: _propTypes2.default.string,
  action: _propTypes2.default.func,
  actionArgument: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
exports.default = IceCommandButton;


_HCommandButton2.default.contextTypes = {
  getFormId: _propTypes2.default.func
};