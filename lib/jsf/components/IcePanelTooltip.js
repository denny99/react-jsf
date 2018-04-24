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

var IcePanelTooltip = function(_JsfElement) {
  _inherits(IcePanelTooltip, _JsfElement);

  function IcePanelTooltip(props, context) {
    _classCallCheck(this, IcePanelTooltip);

    var _this = _possibleConstructorReturn(this, (IcePanelTooltip.__proto__ ||
        Object.getPrototypeOf(IcePanelTooltip)).call(this, props, context));

    _this.state.style = IcePanelTooltip.hiddenStyle;

    _this.hideTooltip = _this.hideTooltip.bind(_this);
    return _this;
  }

  _createClass(IcePanelTooltip, [
    {
      key: 'hideTooltip',
      value: function hideTooltip() {
        this.setState({
          style: IcePanelTooltip.hiddenStyle,
        });
      },
    }, {
      key: 'render',
      value: function render() {
        var props = {};

        switch (this.props.hideOn) {
          case 'mouseout':
            props.onMouseOut = this.hideTooltip;
            break;
        }

        var div = _react2.default.createElement(
            'div',
            {
              className: 'icePnlTlTip', id: this.state.id,
              style: this.state.style,
            },
            _react2.default.createElement(
                'table',
                {cellPadding: '0', cellSpacing: '0'},
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        {id: this.state.id + '-tr'},
                        _react2.default.createElement(
                            'td',
                            {className: 'icePnlTlTipBody', colSpan: '2'},
                            this.body,
                        ),
                    ),
                ),
            ),
            _react2.default.createElement('span',
                {id: this.state.id + 'script'}),
        );
        return _react2.default.cloneElement(div, props);
      },
    }]);

  return IcePanelTooltip;
}(_JsfElement3.default);

IcePanelTooltip.propTypes = {
  id: _propTypes2.default.string,
  hideOn: _propTypes2.default.string,
};
IcePanelTooltip.hiddenStyle = {display: 'none', visibility: 'hidden'};
exports.default = IcePanelTooltip;


IcePanelTooltip.contextTypes = {
  getFormId: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
};