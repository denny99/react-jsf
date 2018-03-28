'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FValidateRegex = require('../components/FValidateRegex');

var _FValidateRegex2 = _interopRequireDefault(_FValidateRegex);

var _JsfElement2 = require('./JsfElement');

var _JsfElement3 = _interopRequireDefault(_JsfElement2);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_JsfElement) {
  _inherits(Input, _JsfElement);

  function Input(props, context) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props, context));

    _this.hasError = false;
    _this.externalError = false;
    _this.initialValidation = true;
    _this.errorMessage = '';

    _this.handleChange = _this.handleChange.bind(_this);
    _this.validate = _this.validate.bind(_this);
    _this.setError = _this.setError.bind(_this);
    _this.setExternalError = _this.setExternalError.bind(_this);
    return _this;
  }

  /**
   * @return {object| number | string}
   */


  _createClass(Input, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_.isEmpty(this.value)) {
                  this.value = '';
                }

                _context.next = 3;
                return this.componentDidUpdate();

              case 3:
                this.initialValidation = false;

              case 4:
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
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!this.converterError() && !this.externalError)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return this.validate();

              case 3:
                response = _context2.sent;


                if (this.hasError !== response.hasError || this.errorMessage !== response.errorMessage) {
                  this.setError(response.hasError, response.errorMessage);
                } else {
                  this.hasError = response.hasError;
                  this.errorMessage = response.errorMessage;
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidUpdate() {
        return _ref2.apply(this, arguments);
      }

      return componentDidUpdate;
    }()

    /**
     *
     * @param {boolean} hasError
     * @param {string} [message]
     */

  }, {
    key: 'setExternalError',
    value: function setExternalError(hasError, message) {
      this.externalError = hasError;
      this.setError(hasError, message);
    }

    /**
     *
     * @param {boolean} hasError
     * @param {string} [message]
     */

  }, {
    key: 'setError',
    value: function setError(hasError, message) {
      this.hasError = hasError;
      this.errorMessage = message ? message : '';
      this.context.updateMessages(this, this.initialValidation);
    }

    /**
     * handle input change
     * @param {Event} event
     * @return {Promise<void>}
     */

  }, {
    key: 'handleChange',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.value = event.target.value;

                if (!(this.ajax && this.ajax.props.event === 'change')) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return this.ajax.call();

              case 4:
                if (!this.props.hasOwnProperty('onchange')) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 7;
                return this.props.onchange();

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleChange(_x) {
        return _ref3.apply(this, arguments);
      }

      return handleChange;
    }()

    /**
     * checks correctness of input
     * @return {Promise<{hasError: boolean, errorMessage: string}>}
     */

  }, {
    key: 'validate',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var hasError, message, currentValue, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child, response;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                hasError = false;
                message = 'Error in the input field!';
                currentValue = this.value;

                // check for validation children

                if (hasError) {
                  _context4.next = 23;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 7;

                for (_iterator = this.state.children[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  child = _step.value;

                  if (child instanceof _FValidateRegex2.default) {
                    // do regexp validation
                    if (!child.validate(currentValue)) {
                      hasError = true;
                      message = this.props.validatorMessage;
                    }
                  }
                }
                _context4.next = 15;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4['catch'](7);
                _didIteratorError = true;
                _iteratorError = _context4.t0;

              case 15:
                _context4.prev = 15;
                _context4.prev = 16;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 18:
                _context4.prev = 18;

                if (!_didIteratorError) {
                  _context4.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context4.finish(18);

              case 22:
                return _context4.finish(15);

              case 23:

                // check for validation props
                if (this.props.required && !hasError) {
                  if (_.isEmpty(currentValue)) {
                    hasError = true;
                    message = this.props.requiredMessage;
                  }
                }

                if (this.props.maxLength && !hasError) {
                  if (currentValue && currentValue.length > this.props.maxLength) {
                    hasError = true;
                    message = 'Max ' + this.props.maxLength + ' Characters allowed';
                  }
                }

                if (!(this.props.validator && !hasError)) {
                  _context4.next = 30;
                  break;
                }

                _context4.next = 28;
                return this.props.validator(this);

              case 28:
                response = _context4.sent;

                if (response.error) {
                  hasError = true;
                  message = response.message;
                }

              case 30:
                return _context4.abrupt('return', {
                  hasError: hasError,
                  errorMessage: hasError ? message : ''
                });

              case 31:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[7, 11, 15, 23], [16,, 18, 22]]);
      }));

      function validate() {
        return _ref4.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: 'value',
    get: function get() {
      // only inputs write back to form element via prop notation
      var value = typeof this.props.value === 'string' ? this.context.property(this.props.value) : this.props.value;

      // only convert if requested input not empty
      value = this.converter && typeof value !== 'string' ? this.converter.getAsString(value) : value;

      return value;
    }

    /**
     *
     * @param {object| number | string} o
     */
    ,
    set: function set(o) {
      var value = o;
      try {
        value = this.converter && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object' ? this.converter.getAsObject(o) : o;
      } catch (e) {
        this.setError(true, this.props.converterMessage);
      } finally {
        // only a property annotation has to write into the context object (e.g.: bla.blub)
        if (typeof this.props.value === 'string') {
          this.context.property(this.props.value, value);
        }
      }
    }
  }]);

  return Input;
}(_JsfElement3.default);

exports.default = Input;