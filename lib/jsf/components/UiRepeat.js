'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _VarInjector = require('../util/VarInjector');

var _VarInjector2 = _interopRequireDefault(_VarInjector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UiRepeat = function (_React$Component) {
  _inherits(UiRepeat, _React$Component);

  function UiRepeat(props, context) {
    _classCallCheck(this, UiRepeat);

    return _possibleConstructorReturn(this, (UiRepeat.__proto__ || Object.getPrototypeOf(UiRepeat)).call(this, props, context));
  }

  _createClass(UiRepeat, [{
    key: 'render',
    value: function render() {
      var rows = [];
      var children = _react2.default.Children.toArray(this.props.children);

      for (var i = 0; i < this.props.value.length; i++) {
        var obj = this.props.value[i];
        var subChildren = [];
        for (var j = 0; j < children.length; j++) {
          var child = children[j];
          subChildren.push(_react2.default.cloneElement(_VarInjector2.default.inject(child, this.props.var, obj), {
            key: '' + i + j
          }));
        }

        rows.push(_react2.default.createElement(
          'div',
          { key: i },
          subChildren
        ));
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        rows
      );
    }
  }]);

  return UiRepeat;
}(_react2.default.Component);

UiRepeat.propTypes = {
  value: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  var: _propTypes2.default.string.isRequired
};
exports.default = UiRepeat;