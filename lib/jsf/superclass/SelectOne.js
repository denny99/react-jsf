'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

var _FSelectItem = require('../components/FSelectItem');

var _FSelectItem2 = _interopRequireDefault(_FSelectItem);

var _FSelectItems = require('../components/FSelectItems');

var _FSelectItems2 = _interopRequireDefault(_FSelectItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectOne = function (_Input) {
  _inherits(SelectOne, _Input);

  function SelectOne(props, context) {
    _classCallCheck(this, SelectOne);

    var _this = _possibleConstructorReturn(this, (SelectOne.__proto__ || Object.getPrototypeOf(SelectOne)).call(this, props, context));

    _this.getCurrentValue = _this.getCurrentValue.bind(_this);
    return _this;
  }

  _createClass(SelectOne, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // if value is unset the first children is the one selected per default
      if (this.value === null || this.value === '') {
        var selectedChild = _react2.default.Children.toArray(this.props.children)[0];
        if (selectedChild.type === _FSelectItem2.default) {
          this.value = selectedChild.props.value;
        }
        if (selectedChild.type === _FSelectItems2.default) {
          this.value = selectedChild.props.value[0].value;
        }
      }
    }
  }, {
    key: 'getCurrentValue',
    value: function getCurrentValue() {
      return this.context.property(this.props.value);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        getFormId: function getFormId(key) {
          return key ? _this2.state.id + ':' + key : _this2.state.id;
        },
        property: this.context.property,
        currentValue: this.getCurrentValue,
        parent: this,
        registerAtAll: this.context.registerAtAll,
        registerAtForm: this.context.registerAtForm
      };
    }
  }]);

  return SelectOne;
}(_Input3.default);

exports.default = SelectOne;