'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ValidationResponse = require('../responses/ValidationResponse');

var _ValidationResponse2 = _interopRequireDefault(_ValidationResponse);

var _FEvent = require('../components/FEvent');

var _FEvent2 = _interopRequireDefault(_FEvent);

var _FAjax = require('../components/FAjax');

var _FAjax2 = _interopRequireDefault(_FAjax);

var _FConvertNumber = require('../components/FConvertNumber');

var _FConvertNumber2 = _interopRequireDefault(_FConvertNumber);

var _FFacet = require('../components/FFacet');

var _FFacet2 = _interopRequireDefault(_FFacet);

var _FValidateRegex = require('../components/FValidateRegex');

var _FValidateRegex2 = _interopRequireDefault(_FValidateRegex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JsfCore = function (_React$Component) {
  _inherits(JsfCore, _React$Component);

  function JsfCore(props, context) {
    _classCallCheck(this, JsfCore);

    var _this = _possibleConstructorReturn(this, (JsfCore.__proto__ || Object.getPrototypeOf(JsfCore)).call(this, props, context));

    _this.events = [];
    _this.ajaxCalls = [];
    _this.validators = [];

    _react2.default.Children.forEach(_this.props.children, function (child) {
      if (child.type === _FEvent2.default) {
        _this.events.push(new child.type(child.props, context));
      }
      if (child.type === _FAjax2.default) {
        child = _react2.default.cloneElement(child, {
          this: _this
        });
        _this.ajaxCalls.push(new child.type(child.props, context));
        return;
      }
      if (child.type === _FFacet2.default) {
        _this[child.props.name] = child.props.children;
        return;
      }
      if (child.type === _FValidateRegex2.default) {
        _this.validators.push(new child.type(child.props, context));
        return;
      }
      if (child.type === _FConvertNumber2.default) {
        _this.converter = new child.type(child.props, context);
      }
    });

    context.registerAtAll(_this);
    _this.handleAjax = _this.handleAjax.bind(_this);
    return _this;
  }

  _createClass(JsfCore, [{
    key: 'jsfOnRender',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function jsfOnRender() {
        return _ref.apply(this, arguments);
      }

      return jsfOnRender;
    }()

    /**
     * triggers a specific event
     * @param {string} type
     * @return {ValidationResponse}
     */

  }, {
    key: 'triggerEvent',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(type) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 3;
                _iterator = this.events[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 12;
                  break;
                }

                event = _step.value;

                if (!(event.props.type === type)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt('return', event.props.listener(this));

              case 9:
                _iteratorNormalCompletion = true;
                _context2.next = 5;
                break;

              case 12:
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](3);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 18:
                _context2.prev = 18;
                _context2.prev = 19;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 21:
                _context2.prev = 21;

                if (!_didIteratorError) {
                  _context2.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context2.finish(21);

              case 25:
                return _context2.finish(18);

              case 26:
                return _context2.abrupt('return', new _ValidationResponse2.default(false));

              case 27:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 14, 18, 26], [19,, 21, 25]]);
      }));

      function triggerEvent(_x) {
        return _ref2.apply(this, arguments);
      }

      return triggerEvent;
    }()

    /**
     *
     * @param {string} event
     * @return {FAjax}
     */

  }, {
    key: 'ajax',
    value: function ajax(event) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.ajaxCalls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var ajax = _step2.value;

          if (ajax.props.event === event) {
            return ajax;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }

    /**
     *
     * @return {object}
     */

  }, {
    key: 'handleAjax',
    value: function handleAjax() {
      var _this2 = this;

      var props = {};
      // TODO merge existing properties
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop = function _loop() {
          var ajax = _step3.value;

          switch (ajax.props.event) {
            case 'blur':
              props.onBlur = function () {
                ajax.call(_this2);
              };
              break;
            default:
              props.onClick = function () {
                ajax.call(_this2);
              };
              break;
          }
        };

        for (var _iterator3 = this.ajaxCalls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return props;
    }
  }]);

  return JsfCore;
}(_react2.default.Component);

exports.default = JsfCore;