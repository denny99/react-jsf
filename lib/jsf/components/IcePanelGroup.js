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

var IcePanelGroup = function (_JsfElement) {
  _inherits(IcePanelGroup, _JsfElement);

  function IcePanelGroup(props, context) {
    _classCallCheck(this, IcePanelGroup);

    var _this = _possibleConstructorReturn(this, (IcePanelGroup.__proto__ || Object.getPrototypeOf(IcePanelGroup)).call(this, props, context));

    _this.onMouseOver = _this.onMouseOver.bind(_this);
    return _this;
  }

  /**
   *
   * @param {SyntheticEvent} event
   */


  _createClass(IcePanelGroup, [{
    key: 'onMouseOver',
    value: function onMouseOver(event) {
      if (this.props.panelTooltip) {
        new ToolTipPanelPopup(this.div, this.context.getFormId(this.props.panelTooltip), event.nativeEvent, 'mouseout', '500', 'false', this.context.getFormId(), '', '/xmlhttp/blank', 'hover', false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.rendered !== false) {
        return _react2.default.createElement(
          'div',
          { ref: function ref(div) {
              _this2.div = div;
            }, className: 'icePnlGrp ' + this.props.styleClass,
            id: this.props.id,
            onMouseOver: this.onMouseOver,
            style: this.props.style },
          this.props.children
        );
      } else {
        return null;
      }
    }
  }]);

  return IcePanelGroup;
}(_JsfElement3.default);

IcePanelGroup.propTypes = {
  id: _propTypes2.default.string,
  panelTooltip: _propTypes2.default.string,
  styleClass: _propTypes2.default.string,
  style: _propTypes2.default.object,
  rendered: _propTypes2.default.bool
};
exports.default = IcePanelGroup;


IcePanelGroup.contextTypes = {
  getFormId: _propTypes2.default.func
};