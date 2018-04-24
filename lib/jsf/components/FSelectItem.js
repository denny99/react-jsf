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

var _HSelectOneMenu = require('./HSelectOneMenu');

var _HSelectOneMenu2 = _interopRequireDefault(_HSelectOneMenu);

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

var FSelectItem = function(_React$Component) {
  _inherits(FSelectItem, _React$Component);

  function FSelectItem(props, context) {
    _classCallCheck(this, FSelectItem);

    var _this = _possibleConstructorReturn(this,
        (FSelectItem.__proto__ || Object.getPrototypeOf(FSelectItem)).call(this,
            props));

    _this.isSelectable = _this.isSelectable.bind(_this);
    return _this;
  }

  /**
   *
   * @return {boolean}
   */


  _createClass(FSelectItem, [
    {
      key: 'isSelectable',
      value: function isSelectable() {
        return !this.props.noSelectionOption;
      },
    }, {
      key: 'render',
      value: function render() {
        var radioId = this.context.getFormId(
            Math.floor(Math.random() * 1000000));
        var radio = _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement('input', {
                  checked: this.context.currentValue() === this.props.value,
                  id: radioId,
                  name: radioId, type: 'radio',
                  value: this.props.value,
                  onChange: this.context.parent.handleChange,
                  onBlur: this.context.parent.validate,
                }),
                _react2.default.createElement(
                    'label',
                    {
                      htmlFor: radioId,
                    },
                    this.props.itemLabel,
                ),
            ),
        );
        var option = _react2.default.createElement(
            'option',
            {
              value: this.props.noSelectionOption ?
                  '' :
                  this.props.value || this.props.itemLabel,
            },
            this.props.itemLabel,
        );
        return this.context.parent instanceof _HSelectOneMenu2.default ?
            option :
            radio;
      },
    }]);

  return FSelectItem;
}(_react2.default.Component);

FSelectItem.propTypes = {
  value: _propTypes2.default.oneOfType(
      [_propTypes2.default.number, _propTypes2.default.string]),
  itemLabel: _propTypes2.default.string.isRequired,
  noSelectionOption: _propTypes2.default.bool,
};
exports.default = FSelectItem;


FSelectItem.contextTypes = {
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
  currentValue: _propTypes2.default.any,
  parent: _propTypes2.default.any,
};