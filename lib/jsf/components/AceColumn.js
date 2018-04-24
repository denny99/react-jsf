'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _JsfElement2 = require('../superclass/JsfElement');

var _JsfElement3 = _interopRequireDefault(_JsfElement2);

var _FFacet = require('./FFacet');

var _FFacet2 = _interopRequireDefault(_FFacet);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var AceColumn = function(_JsfElement) {
  _inherits(AceColumn, _JsfElement);

  function AceColumn(props, context) {
    _classCallCheck(this, AceColumn);

    var _this = _possibleConstructorReturn(this,
        (AceColumn.__proto__ || Object.getPrototypeOf(AceColumn)).call(this,
            props, context));

    _react2.default.Children.forEach(_this.props.children, function(child) {
      if (!(child.type === _FFacet2.default && child.props.name === 'header')) {
        _this.column = child;
      }
    });
    return _this;
  }

  return AceColumn;
}(_JsfElement3.default);

AceColumn.propTypes = {};
exports.default = AceColumn;


AceColumn.contextTypes = {
  getFormId: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
};