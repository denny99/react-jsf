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

var _HForm = require('./HForm');

var _HForm2 = _interopRequireDefault(_HForm);

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

var FAjax = function(_React$Component) {
  _inherits(FAjax, _React$Component);

  function FAjax(props, context) {
    _classCallCheck(this, FAjax);

    var _this = _possibleConstructorReturn(this,
        (FAjax.__proto__ || Object.getPrototypeOf(FAjax)).call(this, props,
            context));

    _this.call = _this.call.bind(_this);
    return _this;
  }

  /**
   *
   * @return {Promise<void>}
   */


  _createClass(FAjax, [
    {
      key: 'call',
      value: function() {
        var _ref = _asyncToGenerator(/*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var obj;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      obj = void 0;
                      _context.t0 = this.props.execute;
                      _context.next = _context.t0 === '@form' ?
                          4 :
                          _context.t0 === '@all' ?
                              6 :
                              8;
                      break;

                    case 4:
                      obj = this.context.form;
                      return _context.abrupt('break', 10);

                    case 6:
                      obj = this.context.all;
                      return _context.abrupt('break', 10);

                    case 8:
                      obj = this.props.this;
                      return _context.abrupt('break', 10);

                    case 10:
                      _context.next = 12;
                      return this.props.listener(obj, this.props.render);

                    case 12:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

        function call() {
          return _ref.apply(this, arguments);
        }

        return call;
      }(),
    }]);

  return FAjax;
}(_react2.default.Component);

FAjax.propTypes = {
  event: _propTypes2.default.string,
  execute: _propTypes2.default.string,
  render: _propTypes2.default.string,
  listener: _propTypes2.default.func.isRequired,
  this: _propTypes2.default.object,
};
FAjax.defaultProps = {
  execute: '@this',
  render: '@this',
  event: 'click',
};
exports.default = FAjax;


FAjax.contextTypes = {
  all: _propTypes2.default.object,
  form: _propTypes2.default.instanceOf(_HForm2.default),
};