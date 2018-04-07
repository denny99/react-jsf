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

var _HSelectBooleanCheckbox = require('./HSelectBooleanCheckbox');

var _HSelectBooleanCheckbox2 = _interopRequireDefault(_HSelectBooleanCheckbox);

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

var IceSelectBooleanCheckbox = function(_React$Component) {
  _inherits(IceSelectBooleanCheckbox, _React$Component);

  function IceSelectBooleanCheckbox() {
    _classCallCheck(this, IceSelectBooleanCheckbox);

    return _possibleConstructorReturn(this,
        (IceSelectBooleanCheckbox.__proto__ ||
            Object.getPrototypeOf(IceSelectBooleanCheckbox)).apply(this,
            arguments));
  }

  _createClass(IceSelectBooleanCheckbox, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_HSelectBooleanCheckbox2.default, {
          styleClass: 'iceSelBoolChkbx ' + this.props.styleClass,
          id: this.props.id,
          value: this.props.value, style: this.props.style,
          validator: this.props.validator,
        });
      },
    }]);

  return IceSelectBooleanCheckbox;
}(_react2.default.Component);

IceSelectBooleanCheckbox.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType(
      [_propTypes2.default.number, _propTypes2.default.string]),
  style: _propTypes2.default.object,
  styleClass: _propTypes2.default.string,
  validator: _propTypes2.default.func,
};
exports.default = IceSelectBooleanCheckbox;


IceSelectBooleanCheckbox.contextTypes = {
  updateMessages: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
};