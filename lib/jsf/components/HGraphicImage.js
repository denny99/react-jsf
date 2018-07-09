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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HGraphicImage = function (_JsfElement) {
  _inherits(HGraphicImage, _JsfElement);

  function HGraphicImage() {
    _classCallCheck(this, HGraphicImage);

    return _possibleConstructorReturn(this, (HGraphicImage.__proto__ || Object.getPrototypeOf(HGraphicImage)).apply(this, arguments));
  }

  _createClass(HGraphicImage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('img', { id: this.state.id,
        src: '/javax.faces.resource/' + this.props.name + '.jsf?ln=' + this.props.library + '&amp;v=3_3_0_130416',
        onClick: this.props.onclick || function () {} });
    }
  }]);

  return HGraphicImage;
}(_JsfElement3.default);

HGraphicImage.propTypes = {
  id: _propTypes2.default.string,
  library: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onclick: _propTypes2.default.func
};
exports.default = HGraphicImage;


HGraphicImage.contextTypes = {
  getFormId: _propTypes2.default.func,
  registerAtAll: _propTypes2.default.func,
  registerAtForm: _propTypes2.default.func
};