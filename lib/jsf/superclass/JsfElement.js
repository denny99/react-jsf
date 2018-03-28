'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FAjax = require('../components/FAjax');

var _FAjax2 = _interopRequireDefault(_FAjax);

var _FFacet = require('../components/FFacet');

var _FFacet2 = _interopRequireDefault(_FFacet);

var _FValidateRegex = require('../components/FValidateRegex');

var _FValidateRegex2 = _interopRequireDefault(_FValidateRegex);

var _FConvertNumber = require('../components/FConvertNumber');

var _FConvertNumber2 = _interopRequireDefault(_FConvertNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JsfElement = function (_React$Component) {
  _inherits(JsfElement, _React$Component);

  function JsfElement(props, context) {
    _classCallCheck(this, JsfElement);

    var _this = _possibleConstructorReturn(this, (JsfElement.__proto__ || Object.getPrototypeOf(JsfElement)).call(this, props, context));

    _this.state = {
      id: context.getFormId ? context.getFormId(_this.props.id) : _this.props.id,
      children: []
    };

    // convert children
    _react2.default.Children.forEach(_this.props.children, function (child) {
      var object = void 0;
      if (child.type === _FAjax2.default) {
        child = _react2.default.cloneElement(child, {
          this: _this
        });
        object = new child.type(child.props, context);
        _this.ajax = object;
        return;
      }
      if (child.type === _FFacet2.default) {
        _this[child.props.name] = child.props.children;
        return;
      }
      if (child.type === _FValidateRegex2.default) {
        object = new child.type(child.props, context);
        _this.state.children.push(object);
        return;
      }
      if (child.type === _FConvertNumber2.default) {
        _this.converter = new child.type(child.props, context);
      }
    });

    if (_this.props.converter) {
      _this.converter = new _this.props.converter();
    }

    _this.handleAjax = _this.handleAjax.bind(_this);
    _this.converterError = _this.converterError.bind(_this);
    return _this;
  }

  /**
   * @return {object| number | string}
   */


  _createClass(JsfElement, [{
    key: 'converterError',


    /**
     * checks if the current input can be converted
     * @returns {boolean}
     */
    value: function converterError() {
      if (!this.converter) {
        return false;
      }
      try {
        _typeof(this.value) !== 'object' ? this.converter.getAsObject(this.value) : this.value;
        return false;
      } catch (e) {
        return true;
      }
    }

    /**
     *
     * @return {object}
     */

  }, {
    key: 'handleAjax',
    value: function handleAjax() {
      var props = {};
      if (this.ajax) {
        switch (this.ajax.props.event) {
          case 'blur':
            props.onBlur = this.ajax.call;
            break;
          default:
            props.onClick = this.ajax.call;
            break;
        }
      }
      return props;
    }
  }, {
    key: 'value',
    get: function get() {
      var value = this.props.value;

      // only convert if requested input not empty
      value = this.converter && typeof value !== 'string' ? this.converter.getAsString(value) : value;

      return value;
    }
  }]);

  return JsfElement;
}(_react2.default.Component);

exports.default = JsfElement;