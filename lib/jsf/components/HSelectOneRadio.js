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

var HSelectOneRadio = function(_SelectOne) {
  _inherits(HSelectOneRadio, _SelectOne);

  function HSelectOneRadio() {
    _classCallCheck(this, HSelectOneRadio);

    return _possibleConstructorReturn(this, (HSelectOneRadio.__proto__ ||
        Object.getPrototypeOf(HSelectOneRadio)).apply(this, arguments));
  }

  _createClass(HSelectOneRadio, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
            'table',
            {
              className: this.props.styleClass,
              id: this.state.id, style: this.props.style,
            },
            _react2.default.createElement(
                'tbody',
                null,
                this.props.children,
            ),
        );
      },
    }]);

  return HSelectOneRadio;
}(_SelectOne3.default);

HSelectOneRadio.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.string,
  layout: _propTypes2.default.string,
  styleClass: _propTypes2.default.string,
  style: _propTypes2.default.object,
  requiredMessage: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  converter: _propTypes2.default.func,
  converterMessage: _propTypes2.default.string,
};
exports.default = HSelectOneRadio;


HSelectOneRadio.contextTypes = {
  registerInput: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
};

HSelectOneRadio.childContextTypes = {
  registerInput: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
  currentValue: _propTypes2.default.any,
  parent: _propTypes2.default.instanceOf(HSelectOneRadio),
};