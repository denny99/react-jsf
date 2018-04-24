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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectOne2 = require('../superclass/SelectOne');

var _SelectOne3 = _interopRequireDefault(_SelectOne2);

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

var HSelectOneMenu = function(_SelectOne) {
  _inherits(HSelectOneMenu, _SelectOne);

  function HSelectOneMenu() {
    _classCallCheck(this, HSelectOneMenu);

    return _possibleConstructorReturn(this, (HSelectOneMenu.__proto__ ||
        Object.getPrototypeOf(HSelectOneMenu)).apply(this, arguments));
  }

  _createClass(HSelectOneMenu, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
            'select',
            {
              defaultValue: this.value, className: this.props.styleClass,
              id: this.state.id,
              name: this.state.id, size: this.props.size,
              style: this.props.style,
              onChange: this.handleChange,
              onBlur: this.validate,
            },
            this.props.children,
        );
      },
    }]);

  return HSelectOneMenu;
}(_SelectOne3.default);

HSelectOneMenu.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.string,
  size: _propTypes2.default.number,
  styleClass: _propTypes2.default.string,
  style: _propTypes2.default.object,
  requiredMessage: _propTypes2.default.string,
  required: _propTypes2.default.bool,
};
exports.default = HSelectOneMenu;


HSelectOneMenu.contextTypes = {
  registerInput: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
};
HSelectOneMenu.childContextTypes = {
  registerInput: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
  currentValue: _propTypes2.default.any,
  parent: _propTypes2.default.instanceOf(HSelectOneMenu),
};