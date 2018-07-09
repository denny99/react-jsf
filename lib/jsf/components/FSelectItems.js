'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectItem = require('../objects/SelectItem');

var _SelectItem2 = _interopRequireDefault(_SelectItem);

var _FSelectItem = require('./FSelectItem');

var _FSelectItem2 = _interopRequireDefault(_FSelectItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FSelectItems = function (_React$Component) {
  _inherits(FSelectItems, _React$Component);

  function FSelectItems() {
    _classCallCheck(this, FSelectItems);

    return _possibleConstructorReturn(this, (FSelectItems.__proto__ || Object.getPrototypeOf(FSelectItems)).apply(this, arguments));
  }

  _createClass(FSelectItems, [{
    key: 'render',
    value: function render() {
      var options = this.props.value.map(function (item, i) {
        return _react2.default.createElement(_FSelectItem2.default, { key: i, value: item.value, itemLabel: item.label });
      });
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        options
      );
    }
  }]);

  return FSelectItems;
}(_react2.default.Component);

FSelectItems.propTypes = {
  value: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_SelectItem2.default)).isRequired
};
exports.default = FSelectItems;


FSelectItems.contextTypes = {
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func
};