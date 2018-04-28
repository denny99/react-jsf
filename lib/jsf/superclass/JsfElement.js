'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

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

var _JsfCore2 = require('./JsfCore');

var _JsfCore3 = _interopRequireDefault(_JsfCore2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
        'this hasn\'t been initialised - super() hasn\'t been called');
  }
  return call && (typeof call === 'object' || typeof call === 'function') ?
      call :
      self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' +
        typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) Object.setPrototypeOf ?
      Object.setPrototypeOf(subClass, superClass) :
      subClass.__proto__ = superClass;
}

var JsfElement = function(_JsfCore) {
  _inherits(JsfElement, _JsfCore);

  function JsfElement(props, context) {
    _classCallCheck(this, JsfElement);

    var _this = _possibleConstructorReturn(this,
        (JsfElement.__proto__ || Object.getPrototypeOf(JsfElement)).call(this,
            props, context));

    _this.state = {
      id: context.getFormId ?
          context.getFormId(_this.props.id) :
          _this.props.id,
      children: [],
    };

    // convert children
    _react2.default.Children.forEach(_this.props.children, function(child) {
      var object = void 0;
      if (child.type === _FAjax2.default) {
        child = _react2.default.cloneElement(child, {
          this: _this,
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

    // elements might be outside of a form
    if (context.registerAtForm) {
      context.registerAtForm(_this);
    }

    _this.handleAjax = _this.handleAjax.bind(_this);
    return _this;
  }

  /**
   *
   * @return {object}
   */


  _createClass(JsfElement, [
    {
      key: 'handleAjax',
      value: function handleAjax() {
        var _this2 = this;

        var props = {};
        // TODO merge existing properties
        if (this.ajax) {
          switch (this.ajax.props.event) {
            case 'blur':
              props.onBlur = function() {
                _this2.ajax.call(_this2);
              };
              break;
            default:
              props.onClick = function() {
                _this2.ajax.call(_this2);
              };
              break;
          }
        }
        return props;
      },
    }]);

  return JsfElement;
}(_JsfCore3.default);

exports.default = JsfElement;