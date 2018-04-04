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

var _ObjectTraverser = require('../util/ObjectTraverser');

var _ObjectTraverser2 = _interopRequireDefault(_ObjectTraverser);

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

var HForm = function(_React$Component) {
  _inherits(HForm, _React$Component);

  function HForm(props, context) {
    _classCallCheck(this, HForm);

    var _this = _possibleConstructorReturn(this,
        (HForm.__proto__ || Object.getPrototypeOf(HForm)).call(this, props,
            context));

    _this.state = {
      messageProps: {},
      data: _this.props.data,
      activeElement: null,
    };

    _this.updateMessages = _this.updateMessages.bind(_this);
    _this.getFormId = _this.getFormId.bind(_this);
    _this.property = _this.property.bind(_this);
    _this.initMessage = _this.initMessage.bind(_this);
    _this.getMessage = _this.getMessage.bind(_this);
    return _this;
  }

  _createClass(HForm, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
            'form',
            {
              id: this.props.id, name: this.props.id,
              className: this.props.styleClass,
            },
            this.props.children,
        );
      },

      /**
       * @param {string} forId
       */

    }, {
      key: 'initMessage',
      value: function initMessage(forId) {
        this.state.messageProps[forId] = {
          message: '',
          show: false,
        };
      },

      /**
       * @param {string} forId
       * @return {{message: string, show: boolean}}
       */

    }, {
      key: 'getMessage',
      value: function getMessage(forId) {
        return this.state.messageProps[forId];
      },

      /**
       * combined getter and setter for form data
       * @param {string} propertyName
       * @param {string} [value]
       * @return {Object}
       */

    }, {
      key: 'property',
      value: function property(propertyName, value) {
        var result = _ObjectTraverser2.default.traverse(this.state.data,
            propertyName, value);
        // only update state when update occurred!
        if (result === null && value !== undefined) {
          this.setState({
            data: this.state.data,
          });
        }
        // in case we did not find a value return empty string
        return result !== null ? result : '';
      },
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          updateMessages: this.updateMessages,
          getFormId: this.getFormId,
          property: this.property,
          all: this.context.all,
          form: this,
          initMessage: this.initMessage,
          getMessage: this.getMessage,
          activeElement: this.state.activeElement,
        };
      },

      /**
       * build form id
       * @param {string} [id]
       * @return {string}
       */

    }, {
      key: 'getFormId',
      value: function getFormId(id) {
        if (id) {
          return this.props.id + ':' + id;
        } else {
          return this.props.id;
        }
      },

      /**
       * checks for any error inside of the form
       * @return {boolean}
       */

    }, {
      key: 'hasError',
      value: function hasError() {
        for (var key in this.state.messageProps) {
          if (this.state.messageProps.hasOwnProperty(key)) {
            if (this.state.messageProps[key].show) {
              // active element is all, so render whole form
              this.setState({
                messageProps: this.state.messageProps,
                activeElement: 'all',
              });
              return true;
            }
          }
        }
        return false;
      },

      /**
       *
       * @param {JsfElement} element
       * @param {boolean} [skipRender]
       */

    }, {
      key: 'updateMessages',
      value: function updateMessages(element, skipRender) {
        this.state.messageProps[element.props.id] = {
          message: element.errorMessage,
          show: element.hasError,
        };
        if (!skipRender) {
          // update messages and mark current used element to prevent rendering of all messages
          this.setState({
            messageProps: this.state.messageProps,
            activeElement: element.props.id,
          });
        }
      },
    }]);

  return HForm;
}(_react2.default.Component);

HForm.propTypes = {
  id: _propTypes2.default.string,
  styleClass: _propTypes2.default.string,
  data: _propTypes2.default.object,
};
exports.default = HForm;

HForm.childContextTypes = {
  initMessage: _propTypes2.default.func,
  getMessage: _propTypes2.default.func,
  updateMessages: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
  all: _propTypes2.default.object,
  form: _propTypes2.default.instanceOf(HForm),
  activeElement: _propTypes2.default.string,
};