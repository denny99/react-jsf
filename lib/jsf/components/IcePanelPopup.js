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

var IcePanelPopup = function(_JsfElement) {
  _inherits(IcePanelPopup, _JsfElement);

  function IcePanelPopup(props, context) {
    _classCallCheck(this, IcePanelPopup);

    var _this = _possibleConstructorReturn(this,
        (IcePanelPopup.__proto__ || Object.getPrototypeOf(IcePanelPopup)).call(
            this, props, context));

    _this.state.width = undefined;
    _this.state.height = undefined;
    return _this;
  }

  _createClass(IcePanelPopup, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        // only do once
        if (this.state.height === undefined && this.props.visible) {
          this.setState({
            width: this.popup.offsetWidth,
            height: this.popup.offsetHeight,
          });
        }
      },
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        // currently auto centre is always active!
        var style = {
          display: 'block',
          position: 'absolute',
          left: this.state.width ?
              window.innerWidth / 2 - this.state.width / 2 :
              '0',
          top: this.state.height ?
              window.innerHeight / 2 - this.state.height / 2 :
              '0',
        };

        if (!this.props.visible) {
          style.display = 'none';
        }

        return _react2.default.createElement(
            'div',
            {
              ref: function ref(div) {
                return _this2.popup = div;
              },
              className: 'icePnlPop ' + this.props.styleClass,
              id: this.state.id,
              style: style,
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
                            {
                              className: 'icePnlPopBody popupBody frameHolderBody',
                              colSpan: '2',
                            },
                            this.body,
                        ),
                    ),
                ),
            ),
            _react2.default.createElement('span',
                {id: this.state.id + 'script'}),
        );
      },
    }]);

  return IcePanelPopup;
}(_JsfElement3.default);

IcePanelPopup.propTypes = {
  id: _propTypes2.default.string,
  styleClass: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  draggable: _propTypes2.default.bool,
  autoCentre: _propTypes2.default.bool,
};
exports.default = IcePanelPopup;

IcePanelPopup.contextTypes = {
  getFormId: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
};