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

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ('value' in desc) {
    return desc.value;
  } else {
    var getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return getter.call(receiver);
  }
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input2 = require('../superclass/Input');

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function(value) {
            step('next', value);
          }, function(err) {
            step('throw', err);
          });
        }
      }

      return step('next');
    });
  };
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

var HInputText = function(_Input) {
  _inherits(HInputText, _Input);

  function HInputText() {
    _classCallCheck(this, HInputText);

    return _possibleConstructorReturn(this,
        (HInputText.__proto__ || Object.getPrototypeOf(HInputText)).apply(this,
            arguments));
  }

  _createClass(HInputText, [
    {
      key: 'componentDidMount',

      /**
       * auto-focus after build
       */
      value: function() {
        var _ref = _asyncToGenerator(/*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _get(HInputText.prototype.__proto__ ||
                          Object.getPrototypeOf(HInputText.prototype),
                          'componentDidMount', this).call(this);

                    case 2:
                      if (this.props.focus) {
                        this.input.focus();
                        // set cursor to the end of input
                        this.input.setSelectionRange(this.input.value.length,
                            this.input.value.length);
                      }

                    case 3:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

        function componentDidMount() {
          return _ref.apply(this, arguments);
        }

        return componentDidMount;
      }(),
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var elem = _react2.default.createElement('input', {
          id: this.state.id,
          name: this.state.id,
          disabled: this.props.disabled,
          type: this.props.type || 'text',
          ref: function ref(input) {
            _this2.input = input;
          },
          style: this.props.style,
          className: this.props.styleClass,
          value: this.value,
          onChange: this.handleChange,
        });

        var props = this.handleAjax();

        return _react2.default.cloneElement(elem, props);
      },
    }]);

  return HInputText;
}(_Input3.default);

HInputText.propTypes = {
  focus: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType(
      [_propTypes2.default.number, _propTypes2.default.string]),
  maxLength: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  styleClass: _propTypes2.default.string,
  type: _propTypes2.default.string,
  validator: _propTypes2.default.func,
  validatorMessage: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  requiredMessage: _propTypes2.default.string,
  converter: _propTypes2.default.func,
  converterMessage: _propTypes2.default.string,
  onchange: _propTypes2.default.func,
};
HInputText.defaultProps = {
  focus: false,
  type: 'text',
};
exports.default = HInputText;


HInputText.contextTypes = {
  updateMessages: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
};