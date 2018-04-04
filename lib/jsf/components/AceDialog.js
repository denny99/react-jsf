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

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj,
                key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

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

var AceDialog = function(_JsfElement) {
  _inherits(AceDialog, _JsfElement);

  function AceDialog(props, context) {
    _classCallCheck(this, AceDialog);

    var _this = _possibleConstructorReturn(this,
        (AceDialog.__proto__ || Object.getPrototypeOf(AceDialog)).call(this,
            props, context));

    _this.state.visible = _this.props.visible;
    _this.state.height = undefined;
    _this.state.width = undefined;

    _this.hide = _this.hide.bind(_this);
    return _this;
  }

  _createClass(AceDialog, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        // only do once
        if (this.state.height === undefined && this.state.visible) {
          this.setState({
            width: this.dialog.offsetWidth,
            height: this.dialog.offsetHeight,
          });
        }
      },
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState({visible: nextProps.visible});
      },
    }, {
      key: 'hide',
      value: function hide() {
        this.setState({
          visible: false,
        });
      },
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var style = {
          left: this.state.width ?
              window.innerWidth / 2 - this.state.width / 2 :
              0,
          top: this.state.height ?
              window.innerHeight / 2 - this.state.height / 2 :
              0,
        };
        style = _.merge(style, this.state.visible ?
            AceDialog.visibleStyle :
            AceDialog.invisibleStyle);
        return _react2.default.createElement(
            'div',
            {id: this.state.id},
            this.state.visible ? _react2.default.createElement('div', {
              className: 'ui-widget-overlay', style: {
                width: window.innerWidth,
                height: window.innerHeight,
                zIndex: 1001,
              },
            }) : null,
            _react2.default.createElement(
                'div',
                {
                  ref: function ref(div) {
                    _this2.dialog = div;
                  },
                  className: 'ui-dialog ui-widget ui-widget-content ui-corner-all ' +
                  this.props.styleClass,
                  tabIndex: '-1', role: 'dialog',
                  'aria-labelledby': 'ui-dialog-title-' + this.state.id +
                  '_main',
                  'aria-hidden': this.state.visible,
                  style: style,
                },
                _react2.default.createElement(
                    'div',
                    {
                      className: 'ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix',
                    },
                    _react2.default.createElement(
                        'span',
                        {
                          className: 'ui-dialog-title',
                          id: 'ui-dialog-title-' + this.state.id + '_main',
                        },
                        this.props.header,
                    ),
                    _react2.default.createElement(
                        'a',
                        {
                          className: 'ui-dialog-titlebar-close ui-corner-all',
                          role: 'button',
                          onClick: this.hide,
                          href: '#',
                          style: this.props.closable ? {} : {display: 'none'},
                        },
                        _react2.default.createElement(
                            'span',
                            {className: 'ui-icon ui-icon-closethick'},
                            'close',
                        ),
                    ),
                ),
                _react2.default.createElement(
                    'div',
                    {
                      id: this.state.id + '_main',
                      className: 'ui-dialog-content ui-widget-content',
                      style: this.state.visible ? {
                        width: 'auto',
                        minHeight: 0,
                        height: 'auto',
                      } : {},
                    },
                    this.props.children,
                ),
            ),
        );
      },
    }]);

  return AceDialog;
}(_JsfElement3.default);

AceDialog.propTypes = {
  id: _propTypes2.default.string,
  styleClass: _propTypes2.default.string,
  header: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  closable: _propTypes2.default.bool,
  modal: _propTypes2.default.bool,
  draggable: _propTypes2.default.bool,
  resizable: _propTypes2.default.bool,
  showEffect: _propTypes2.default.string,
  hideEffect: _propTypes2.default.string,
  showHeader: _propTypes2.default.bool,
};
AceDialog.invisibleStyle = {display: 'none', zIndex: 1000, outline: 0};
AceDialog.visibleStyle = {
  display: 'block',
  zIndex: 1002,
  outline: 0,
  height: 'auto',
  minWidth: '150px',
  width: 'auto',
};
exports.default = AceDialog;
;