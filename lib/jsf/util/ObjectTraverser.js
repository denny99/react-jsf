'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectTraverser = function () {
  function ObjectTraverser() {
    _classCallCheck(this, ObjectTraverser);
  }

  _createClass(ObjectTraverser, null, [{
    key: 'traverse',

    /**
     * search for a property in an object and return value
     * @param {object} object
     * @param {string} property e.g. test.x.y
     * @param {object} [value] value passed object if property not found
     */
    value: function traverse(object, property, value) {
      /**
       * move down in object
       * @param {object} object current subObject
       * @param {string[]} properties
       * @return {object | null}
       */
      function recursion(object, properties) {
        // set: last property reached
        if (value !== undefined && properties.length === 1) {
          object[properties.pop()] = value;
          return null;
        }

        // try to move down in the object
        var property = properties.pop();

        // final property reached?
        if (properties.length === 0) {
          return object.hasOwnProperty(property) ? object[property] : null;
        }

        // set: if property is missing create empty object
        if (!object.hasOwnProperty(property)) {
          if (value !== undefined) {
            object[property] = {};
          } else {
            // get: prop not found return
            return null;
          }
        }

        // move further down
        return recursion(object[property], properties);
      }

      var properties = property.split('.').reverse();
      return recursion(object, properties);
    }
  }]);

  return ObjectTraverser;
}();

exports.default = ObjectTraverser;