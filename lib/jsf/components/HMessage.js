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

var _JsfElement2 = require('../superclass/JsfElement');

var _JsfElement3 = _interopRequireDefault(_JsfElement2);

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

var HMessage = function(_JsfElement) {
  _inherits(HMessage, _JsfElement);

  function HMessage(props, context) {
    _classCallCheck(this, HMessage);

    var _this = _possibleConstructorReturn(this,
        (HMessage.__proto__ || Object.getPrototypeOf(HMessage)).call(this,
            props, context));

    context.initMessage(_this.props.for);
    return _this;
  }

  _createClass(HMessage, [
    {
      key: 'render',
      value: function render() {
        var props = this.context.getMessage(this.props.for);
        var show = props.show &&
            (this.context.activeElement === this.props.for ||
                this.context.activeElement === 'all');
        return _react2.default.createElement(
            'span',
            {
              className: show ? this.props.styleClass : '',
              id: this.state.id,
            },
            show ?
                props.message :
                _react2.default.createElement('span', {id: this.state.id}),
        );
      },
    }]);

  return HMessage;
}(_JsfElement3.default);

HMessage.propTypes = {
  id: _propTypes2.default.string,
  for: _propTypes2.default.string.isRequired,
  styleClass: _propTypes2.default.string,
};
exports.default = HMessage;

HMessage.contextTypes = {
  getFormId: _propTypes2.default.func,
  initMessage: _propTypes2.default.func,
  getMessage: _propTypes2.default.func,
  activeElement: _propTypes2.default.string,
};