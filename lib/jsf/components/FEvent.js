'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HBody = require('./HBody');

var _HBody2 = _interopRequireDefault(_HBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FEvent = function (_React$Component) {
  _inherits(FEvent, _React$Component);

  function FEvent() {
    _classCallCheck(this, FEvent);

    return _possibleConstructorReturn(this, (FEvent.__proto__ || Object.getPrototypeOf(FEvent)).apply(this, arguments));
  }

  _createClass(FEvent, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return FEvent;
}(_react2.default.Component);

FEvent.propTypes = {
  id: _propTypes2.default.string,
  type: _propTypes2.default.string,
  listener: _propTypes2.default.func.isRequired
};
exports.default = FEvent;


FEvent.contextTypes = {
  all: _propTypes2.default.instanceOf(_HBody2.default),
  // circular imports, so just call it object
  form: _propTypes2.default.object
};