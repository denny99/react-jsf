'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input2 = require('../superclass/Input');

var _Input3 = _interopRequireDefault(_Input2);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HSelectBooleanCheckbox = function (_Input) {
  _inherits(HSelectBooleanCheckbox, _Input);

  function HSelectBooleanCheckbox() {
    _classCallCheck(this, HSelectBooleanCheckbox);

    return _possibleConstructorReturn(this, (HSelectBooleanCheckbox.__proto__ || Object.getPrototypeOf(HSelectBooleanCheckbox)).apply(this, arguments));
  }

  _createClass(HSelectBooleanCheckbox, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_.isEmpty(this.value)) {
                  this.value = false;
                }

              case 1:
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
    key: 'handleChange',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _get(HSelectBooleanCheckbox.prototype.__proto__ || Object.getPrototypeOf(HSelectBooleanCheckbox.prototype), 'handleChange', this).call(this, {
                  target: {
                    value: event.target.checked
                  }
                });

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleChange(_x) {
        return _ref2.apply(this, arguments);
      }

      return handleChange;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { className: this.props.styleClass, id: this.state.id,
        name: this.state.id,
        type: 'checkbox', onChange: this.handleChange,
        onBlur: this.validate,
        defaultValue: this.value || false });
    }
  }]);

  return HSelectBooleanCheckbox;
}(_Input3.default);

HSelectBooleanCheckbox.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  style: _propTypes2.default.object,
  styleClass: _propTypes2.default.string,
  // receives this as first param
  validator: _propTypes2.default.func
};
exports.default = HSelectBooleanCheckbox;


HSelectBooleanCheckbox.contextTypes = {
  registerInput: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func,
  getFormId: _propTypes2.default.func,
  property: _propTypes2.default.func
};