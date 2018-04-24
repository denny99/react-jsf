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

var _JsfCore2 = require('../superclass/JsfCore');

var _JsfCore3 = _interopRequireDefault(_JsfCore2);

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

var HForm = function(_JsfCore) {
  _inherits(HForm, _JsfCore);

  function HForm(props, context) {
    _classCallCheck(this, HForm);

    var _this = _possibleConstructorReturn(this,
        (HForm.__proto__ || Object.getPrototypeOf(HForm)).call(this, props,
            context));

    _this.state = {
      inputs: {},
      data: _this.props.data,
    };

    _this.jsfElements = [];

    _this.registerInput = _this.registerInput.bind(_this);
    _this.registerAtForm = _this.registerAtForm.bind(_this);
    _this.getFormId = _this.getFormId.bind(_this);
    _this.property = _this.property.bind(_this);
    _this.getInput = _this.getInput.bind(_this);
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
       * @return {Input}
       */

    }, {
      key: 'getInput',
      value: function getInput(forId) {
        return this.state.inputs[forId] || {hasError: false};
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
          registerInput: this.registerInput,
          registerAtForm: this.registerAtForm,
          registerAtAll: this.context.registerAtAll,
          getFormId: this.getFormId,
          property: this.property,
          all: this.context.all,
          form: this,
          getInput: this.getInput,
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
      key: 'validateInputs',
      value: function() {
        var _ref = _asyncToGenerator(/*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var valid, key, input, response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      valid = true;
                      _context.t0 = regeneratorRuntime.keys(this.state.inputs);

                    case 2:
                      if ((_context.t1 = _context.t0()).done) {
                        _context.next = 12;
                        break;
                      }

                      key = _context.t1.value;

                      if (!this.state.inputs.hasOwnProperty(key)) {
                        _context.next = 10;
                        break;
                      }

                      input = this.state.inputs[key];
                      _context.next = 8;
                      return input.validate();

                    case 8:
                      response = _context.sent;

                      if (response.hasError) {
                        valid = false;
                      }

                    case 10:
                      _context.next = 2;
                      break;

                    case 12:
                      return _context.abrupt('return', valid);

                    case 13:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

        function validateInputs() {
          return _ref.apply(this, arguments);
        }

        return validateInputs;
      }(),

      /**
       * validate form elements
       * @param {boolean} [skipInputs]
       * @returns {Promise<boolean>} true if ok
       */

    }, {
      key: 'validate',
      value: function() {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/
            regeneratorRuntime.mark(function _callee2(skipInputs) {
              var valid, result, input;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      valid = true;

                      // grab events and validate

                      if (skipInputs) {
                        _context2.next = 5;
                        break;
                      }

                      _context2.next = 4;
                      return this.validateInputs();

                    case 4:
                      valid = _context2.sent;

                    case 5:
                      if (!valid) {
                        _context2.next = 13;
                        break;
                      }

                      _context2.next = 8;
                      return this.triggerEvent('postValidate');

                    case 8:
                      result = _context2.sent;

                      valid = !result.error;
                      input = this.getInput(result.elementId);

                      input.hasError = result.error;
                      input.errorMessage = result.errorMessage;

                    case 13:

                      this.setState({
                        inputs: this.state.inputs,
                      });

                      return _context2.abrupt('return', valid);

                    case 15:
                    case 'end':
                      return _context2.stop();
            }
          }
              }, _callee2, this);
            }));

        function validate(_x) {
          return _ref2.apply(this, arguments);
        }

        return validate;
      }()

      /**
       *
       * @param {Input} element
       */

    }, {
      key: 'registerInput',
      value: function registerInput(element) {
        this.state.inputs[element.props.id] = element;
        this.setState({
          inputs: this.state.inputs,
        });
      },
    }, {
      key: 'registerAtForm',
      value: function registerAtForm(element) {
        this.jsfElements.push(element);
      },
    }, {
      key: 'jsfOnRender',
      value: function() {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/
            regeneratorRuntime.mark(function _callee3(skipChildren) {
              var _iteratorNormalCompletion, _didIteratorError, _iteratorError,
                  _iterator, _step, element;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;

                      if (skipChildren) {
                        _context3.next = 28;
                        break;
                      }

                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      _context3.prev = 5;
                      _iterator = this.jsfElements[Symbol.iterator]();

                    case 7:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _context3.next = 14;
                        break;
                      }

                      element = _step.value;
                      _context3.next = 11;
                      return element.jsfOnRender();

                    case 11:
                      _iteratorNormalCompletion = true;
                      _context3.next = 7;
                      break;

                    case 14:
                      _context3.next = 20;
                      break;

                    case 16:
                      _context3.prev = 16;
                      _context3.t0 = _context3['catch'](5);
                      _didIteratorError = true;
                      _iteratorError = _context3.t0;

                    case 20:
                      _context3.prev = 20;
                      _context3.prev = 21;

                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }

                    case 23:
                      _context3.prev = 23;

                      if (!_didIteratorError) {
                        _context3.next = 26;
                        break;
                      }

                      throw _iteratorError;

                    case 26:
                      return _context3.finish(23);

                    case 27:
                      return _context3.finish(20);

                    case 28:
                      _context3.next = 30;
                      return this.validate(true);

                    case 30:
                      _context3.next = 35;
                      break;

                    case 32:
                      _context3.prev = 32;
                      _context3.t1 = _context3['catch'](0);

                      console.error(_context3.t1);

                    case 35:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 32], [5, 16, 20, 28], [21, , 23, 27]]);
            }));

        function jsfOnRender(_x2) {
          return _ref3.apply(this, arguments);
        }

        return jsfOnRender;
      }(),
    }]);

  return HForm;
}(_JsfCore3.default);

HForm.propTypes = {
  id: _propTypes2.default.string,
  styleClass: _propTypes2.default.string,
  data: _propTypes2.default.object,
};
exports.default = HForm;


HForm.childContextTypes = {
  getInput: _propTypes2.default.func,
  registerInput: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func,
  all: _propTypes2.default.object,
  form: _propTypes2.default.instanceOf(HForm),
};

HForm.contextTypes = {
  registerAtAll: _propTypes2.default.func,
  all: _propTypes2.default.object,
};