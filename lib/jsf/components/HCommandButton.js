'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JsfElement2 = require('../superclass/JsfElement');

var _JsfElement3 = _interopRequireDefault(_JsfElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HCommandButton = function (_JsfElement) {
  _inherits(HCommandButton, _JsfElement);

  function HCommandButton(props, context) {
    _classCallCheck(this, HCommandButton);

    var _this = _possibleConstructorReturn(this, (HCommandButton.__proto__ || Object.getPrototypeOf(HCommandButton)).call(this, props, context));

    _this.action = _this.action.bind(_this);
    return _this;
  }

  /**
   * on click action
   * gather data from parent form
   * @param {Event} e
   */


  _createClass(HCommandButton, [{
    key: 'action',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // jsf used form, but we don't wanna submit them in react
                e.preventDefault();

                if (this.props.immediate) {
                  _context.next = 5;
                  break;
                }

                if (!(this.ajax && this.ajax.props.event === 'click')) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return this.ajax.call();

              case 5:
                // argument might be undefined
                this.props.action(this.props.actionArgument);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function action(_x) {
        return _ref.apply(this, arguments);
      }

      return action;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { className: this.props.styleClass, id: this.state.id,
        style: this.props.style,
        name: this.props.id, type: 'submit', value: this.props.value,
        onClick: this.action });
    }
  }]);

  return HCommandButton;
}(_JsfElement3.default);

HCommandButton.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  immediate: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  styleClass: _propTypes2.default.string,
  action: _propTypes2.default.func,
  actionArgument: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
exports.default = HCommandButton;


HCommandButton.contextTypes = {
  getFormId: _propTypes2.default.func
};