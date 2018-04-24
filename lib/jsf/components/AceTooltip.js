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

var AceTooltip = function(_JsfElement) {
  _inherits(AceTooltip, _JsfElement);

  function AceTooltip(props, context) {
    _classCallCheck(this, AceTooltip);

    var _this = _possibleConstructorReturn(this,
        (AceTooltip.__proto__ || Object.getPrototypeOf(AceTooltip)).call(this,
            props, context));

    switch (_this.props.showEffect) {
      case 'slide':
      default:
        _this.showEffect = 'scale';
        _this.showEffectOptions = {
          origin: ['top', 'left'],
        };
        break;
    }

    switch (_this.props.hideEffect) {
      case 'slide':
      default:
        _this.hideEffect = 'scale';
        _this.hideEffectOptions = {
          origin: ['top', 'left'],
        };
        break;
    }
    return _this;
  }

  _createClass(AceTooltip, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var self = this;
        this.tooltip = new ice.ace.Tooltip(this.state.id, {
          speechBubble: this.props.speechBubble,
          content: $(('#' + this.state.id).replace(':', '\\:')).next(),
          show: {
            effect: function effect(offset) {
              this.toggle(self.showEffect, self.showEffectOptions,
                  self.props.showEffectLength); // "this" refers to the tooltip
            },
            delay: this.props.showDelay,
          },
          position: {
            my: this.props.position,
            at: this.props.targetPosition,
          },
          hide: {
            effect: function effect(offset) {
              this.toggle(self.hideEffect, self.hideEffectOptions,
                  self.props.hideEffectLength); // "this" refers to the tooltip
            },
            delay: this.props.hideDelay,
          },
          styleClass: this.props.styleClass,
          forComponent: this.context.getFormId(this.props.for),
          style: {
            classes: 'ui-tooltip-content',
          },
        });
      },
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement('span', {key: 1, id: this.state.id}),
            _react2.default.createElement(
                'div',
                {
                  key: 2, id: this.state.id + '_content',
                  style: {display: 'none'},
                },
                this.props.children,
            ),
        );
      },
    }]);

  return AceTooltip;
}(_JsfElement3.default);

AceTooltip.propTypes = {
  id: _propTypes2.default.string,
  for: _propTypes2.default.string.isRequired,
  speechBubble: _propTypes2.default.bool,
  showEffect: _propTypes2.default.string,
  hideEffect: _propTypes2.default.string,
  showDelay: _propTypes2.default.number,
  hideDelay: _propTypes2.default.number,
  position: _propTypes2.default.string,
  targetPosition: _propTypes2.default.string,
  showEffectLength: _propTypes2.default.number,
  hideEffectLength: _propTypes2.default.number,
  styleClass: _propTypes2.default.string,
};
AceTooltip.defaultProps = {
  speechBubble: false,
  showEffect: 'slide',
  hideEffect: 'slide',
  showDelay: 200,
  hideDelay: 100,
  position: 'bottomLeft',
  targetPosition: 'topRight',
  showEffectLength: 200,
  hideEffectLength: 200,
};
exports.default = AceTooltip;


AceTooltip.contextTypes = {
  getFormId: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
};