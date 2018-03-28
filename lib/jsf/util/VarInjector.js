'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ObjectTraverser = require('./ObjectTraverser');

var _ObjectTraverser2 = _interopRequireDefault(_ObjectTraverser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VarInjector = function () {
  function VarInjector() {
    _classCallCheck(this, VarInjector);
  }

  _createClass(VarInjector, null, [{
    key: 'inject',


    /**
     *
     * @param {React.Component} component
     * @param {string} varName name of object
     * @param {object} object contains the data to be injected
     *
     * @return {React.Component}
     */
    value: function inject(component, varName, object) {
      var props = {};
      var children = [];

      for (var key in component.props) {
        if (!component.props.hasOwnProperty(key)) {
          continue;
        }

        // skip complex subchildren structure, only continue with plain string
        if (key === 'children' && _typeof(component.props[key]) === 'object') {
          continue;
        }
        var value = component.props[key];
        if (VarInjector.hasInjection(value)) {
          if (this.hasObjectInjection(value, varName)) {
            props[key] = object;
          } else {
            props[key] = VarInjector.replace(value, varName, object);
          }
        } else {
          // we are replacing all props, so save the original value
          props[key] = value;
        }
      }

      // check if we have to search for injections in the children
      if (component.hasOwnProperty('props') && component.props.hasOwnProperty('children') && _typeof(component.props.children) === 'object') {
        // add key properties otherwise react complains
        _react2.default.Children.forEach(component.props.children, function (child, i) {
          children.push(VarInjector.inject(_react2.default.cloneElement(child, { key: i }), varName, object));
        });
      } else {
        // child is plain string
        children = props.children;
      }

      return _react2.default.cloneElement(component, props, children);
    }

    /**
     *
     * @param {string} value
     */

  }, {
    key: 'hasInjection',
    value: function hasInjection(value) {
      return typeof value === 'string' && value.match(VarInjector.injectionRegex) !== null;
    }

    /**
     *
     * @param {string} value
     * @param {string} varName
     */

  }, {
    key: 'hasObjectInjection',
    value: function hasObjectInjection(value, varName) {
      return value.match(new RegExp('#\\[' + varName + ']', 'g')) !== null;
    }

    /**
     *
     * @param {string} string
     * @param {string} varName
     * @param {object} object
     * @return {string | object}
     */

  }, {
    key: 'replace',
    value: function replace(string, varName, object) {
      var regex = new RegExp('#\\[' + varName + '\\..*]', 'g');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = string.match(regex)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;

          //group has the pattern #[varName..*], extract only .*
          var property = group.slice(2 + varName.length + 1, group.length - 1);
          var value = _ObjectTraverser2.default.traverse(object, property);
          if (typeof value === 'string') {
            string = string.replace(group, value);
          } else {
            string = value;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return string;
    }
  }]);

  return VarInjector;
}();

VarInjector.injectionRegex = /#\[.*]/g;
exports.default = VarInjector;