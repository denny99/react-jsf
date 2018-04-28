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

var _Output2 = require('../superclass/Output');

var _Output3 = _interopRequireDefault(_Output2);

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

var HOutputLabel = function(_Output) {
  _inherits(HOutputLabel, _Output);

  function HOutputLabel() {
    _classCallCheck(this, HOutputLabel);

    return _possibleConstructorReturn(this,
        (HOutputLabel.__proto__ || Object.getPrototypeOf(HOutputLabel)).apply(
            this, arguments));
  }

  _createClass(HOutputLabel, [
    {
      key: 'render',
      value: function render() {
        var forId = this.context ?
            this.context.getFormId(this.props.for) :
            this.props.for;
        return _react2.default.createElement(
            'label',
            {
              className: this.props.styleClass, htmlFor: forId,
              id: this.state.id, style: this.props.style,
            },
            this.props.children,
        );
      },
    }]);

  return HOutputLabel;
}(_Output3.default);

HOutputLabel.propTypes = {
  id: _propTypes2.default.string,
  for: _propTypes2.default.string,
  style: _propTypes2.default.object,
  styleClass: _propTypes2.default.string,
};
exports.default = HOutputLabel;


HOutputLabel.contextTypes = {
  getFormId: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
};