'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HBody = function (_React$Component) {
  _inherits(HBody, _React$Component);

  function HBody(props, context) {
    _classCallCheck(this, HBody);

    var _this = _possibleConstructorReturn(this, (HBody.__proto__ || Object.getPrototypeOf(HBody)).call(this, props, context));

    _this.jsfElements = [];

    _this.register = _this.register.bind(_this);
    return _this;
  }

  _createClass(HBody, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }

    /**
     *
     * @param {JsfCore} elem
     */

  }, {
    key: 'register',
    value: function register(elem) {
      this.jsfElements.push(elem);
    }
  }, {
    key: 'jsfOnRender',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 4;
                _iterator = this.jsfElements[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 13;
                  break;
                }

                element = _step.value;
                _context.next = 10;
                return element.jsfOnRender(true);

              case 10:
                _iteratorNormalCompletion = true;
                _context.next = 6;
                break;

              case 13:
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](4);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 19:
                _context.prev = 19;
                _context.prev = 20;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 22:
                _context.prev = 22;

                if (!_didIteratorError) {
                  _context.next = 25;
                  break;
                }

                throw _iteratorError;

              case 25:
                return _context.finish(22);

              case 26:
                return _context.finish(19);

              case 27:
                _context.next = 32;
                break;

              case 29:
                _context.prev = 29;
                _context.t1 = _context['catch'](0);

                console.error(_context.t1);

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 29], [4, 15, 19, 27], [20,, 22, 26]]);
      }));

      function jsfOnRender() {
        return _ref.apply(this, arguments);
      }

      return jsfOnRender;
    }()
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        all: this,
        registerAtAll: this.register
      };
    }
  }]);

  return HBody;
}(_react2.default.Component);

exports.default = HBody;


HBody.childContextTypes = {
  registerAtAll: _propTypes2.default.func,
  all: _propTypes2.default.instanceOf(HBody)
};