'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _VarInjector = require('../../util/VarInjector');

var _VarInjector2 = _interopRequireDefault(_VarInjector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row(props, context) {
    _classCallCheck(this, Row);

    var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props, context));

    _this.state = {};
    _this.state[_this.props.varName] = _this.props.var;
    return _this;
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var columns = [];
      for (var i = 0, j = this.props.children.length; i < j; i++) {
        var column = this.props.children[i];
        var convertedColumn = _VarInjector2.default.inject(column, this.props.varName, this.props.var);
        columns.push(_react2.default.createElement(
          'td',
          { key: i },
          convertedColumn
        ));
      }

      return _react2.default.createElement(
        'tr',
        { className: this.props.index % 2 === 0 ? 'ui-datatable-even' : 'ui-datatable-odd',
          id: this.props.parentId + '_row_' + (this.props.currentPage * this.props.pageSize + this.props.index), tabIndex: '0' },
        columns
      );
    }
  }]);

  return Row;
}(_react2.default.Component);

Row.propTypes = {
  currentPage: _propTypes2.default.number.isRequired,
  pageSize: _propTypes2.default.number.isRequired,
  index: _propTypes2.default.number.isRequired,
  parentId: _propTypes2.default.string.isRequired,
  var: _propTypes2.default.object.isRequired,
  varName: _propTypes2.default.string.isRequired
};
exports.default = Row;