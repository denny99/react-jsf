'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FConvertNumber = function (_React$Component) {
  _inherits(FConvertNumber, _React$Component);

  function FConvertNumber(props, context) {
    _classCallCheck(this, FConvertNumber);

    var _this = _possibleConstructorReturn(this, (FConvertNumber.__proto__ || Object.getPrototypeOf(FConvertNumber)).call(this, props, context));

    _this.getAsString = _this.getAsString.bind(_this);
    return _this;
  }

  /**
   *
   * @param {number} content
   * @return {string}
   */


  _createClass(FConvertNumber, [{
    key: 'getAsString',
    value: function getAsString(content) {
      var pattern = this.props.pattern.split(',');
      return content.toLocaleString(this.props.locale, {
        minimumFractionDigits: pattern[1].length,
        minimumIntegerDigits: pattern[0].length,
        useGrouping: this.props.groupingUsed
      });
    }
  }]);

  return FConvertNumber;
}(_react2.default.Component);

FConvertNumber.propTypes = {
  pattern: _propTypes2.default.string.isRequired,
  groupingUsed: _propTypes2.default.bool.isRequired,
  locale: _propTypes2.default.string.isRequired
};
exports.default = FConvertNumber;