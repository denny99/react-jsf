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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paginator = function (_React$Component) {
  _inherits(Paginator, _React$Component);

  function Paginator() {
    _classCallCheck(this, Paginator);

    return _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).apply(this, arguments));
  }

  _createClass(Paginator, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var maxPage = Math.ceil(this.props.maxResults / this.props.pageSize);
      var firstLink = this.props.currentPage === 1 ? _react2.default.createElement(
        'span',
        { id: 'yui-pg0-0-first-span',
          className: 'ui-paginator-first ui-state-default ui-corner-all ui-state-disabled' },
        _react2.default.createElement(
          'span',
          { className: 'ui-icon ui-icon-seek-first' },
          'First'
        )
      ) : _react2.default.createElement(
        'a',
        { id: 'yui-pg1-0-first-link', href: '#', onClick: this.context.first,
          className: 'ui-paginator-first ui-state-default ui-corner-all' },
        _react2.default.createElement(
          'span',
          {
            className: 'ui-icon ui-icon-seek-first' },
          'First'
        )
      );
      var prevLink = this.props.currentPage === 1 ? _react2.default.createElement(
        'span',
        { id: 'yui-pg0-0-prev-span',
          className: 'ui-paginator-previous ui-state-default ui-corner-all ui-state-disabled' },
        _react2.default.createElement(
          'span',
          { className: 'ui-icon ui-icon-seek-prev' },
          'Prev'
        )
      ) : _react2.default.createElement(
        'a',
        { id: 'yui-pg1-0-prev-link', href: '#', onClick: this.context.prev,
          className: 'ui-paginator-previous ui-state-default ui-corner-all' },
        _react2.default.createElement(
          'span',
          {
            className: 'ui-icon ui-icon-seek-prev' },
          'Prev'
        )
      );
      var nextLink = this.props.currentPage === maxPage ? _react2.default.createElement(
        'span',
        { id: 'yui-pg2-0-next-span',
          className: 'ui-paginator-next ui-state-default ui-corner-all ui-state-disabled' },
        _react2.default.createElement(
          'span',
          {
            className: 'ui-icon ui-icon-seek-next' },
          'Next'
        )
      ) : _react2.default.createElement(
        'a',
        { id: 'yui-pg0-0-next-link', href: '#', onClick: this.context.next,
          className: 'ui-paginator-next ui-state-default ui-corner-all' },
        _react2.default.createElement(
          'span',
          { className: 'ui-icon ui-icon-seek-next' },
          'Next'
        )
      );
      var lastLink = this.props.currentPage === maxPage ? _react2.default.createElement(
        'span',
        { id: 'yui-pg2-0-last-span',
          className: 'ui-paginator-last ui-state-default ui-corner-all ui-state-disabled' },
        _react2.default.createElement(
          'span',
          {
            className: 'ui-icon ui-icon-seek-end' },
          'Last'
        )
      ) : _react2.default.createElement(
        'a',
        { id: 'yui-pg0-0-last-link', href: '#', onClick: this.context.last,
          className: 'ui-paginator-last ui-state-default ui-corner-all' },
        _react2.default.createElement(
          'span',
          { className: 'ui-icon ui-icon-seek-end' },
          'Last'
        )
      );
      var pageLinks = [];

      var startPage = Math.max(1, this.props.currentPage - (this.props.currentPage + 5 > maxPage ? 9 - (maxPage - this.props.currentPage) : 5));
      var endPage = Math.min(maxPage, this.props.currentPage < 7 ? 10 : this.props.currentPage + 4);

      var _loop = function _loop(i, j) {
        if (i === _this2.props.currentPage) {
          pageLinks.push(_react2.default.createElement(
            'span',
            { key: i,
              className: 'ui-paginator-page ui-state-default ui-corner-all ui-paginator-current-page ui-state-active' },
            i
          ));
        } else {
          pageLinks.push(_react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick() {
                _this2.context.setPage(i);
              },
              className: 'ui-paginator-page ui-state-default ui-corner-all',
              key: i },
            i
          ));
        }
      };

      for (var i = startPage, j = endPage; i <= j; i++) {
        _loop(i, j);
      }

      return _react2.default.createElement(
        'div',
        {
          className: 'ui-paginator ' + (this.props.top ? 'ui-paginator-top' : 'ui-paginator-bottom') + ' ui-widget-header ui-corner-tl ui-corner-tr',
          id: 'datatableForm:flightsTable_paginator' + (this.props.top ? 'top' : 'bottom') },
        firstLink,
        prevLink,
        _react2.default.createElement(
          'span',
          { id: 'yui-pg0-0-pages', className: 'ui-paginator-pages' },
          pageLinks
        ),
        nextLink,
        lastLink
      );
    }
  }]);

  return Paginator;
}(_react2.default.Component);

Paginator.propTypes = {
  currentPage: _propTypes2.default.number.isRequired,
  pageSize: _propTypes2.default.number.isRequired,
  maxResults: _propTypes2.default.number.isRequired,
  top: _propTypes2.default.bool.isRequired
};
exports.default = Paginator;


Paginator.contextTypes = {
  first: _propTypes2.default.func,
  prev: _propTypes2.default.func,
  next: _propTypes2.default.func,
  last: _propTypes2.default.func,
  setPage: _propTypes2.default.func
};