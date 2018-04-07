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

var _InvalidChildException = require('../exceptions/InvalidChildException');

var _InvalidChildException2 = _interopRequireDefault(_InvalidChildException);

var _AceColumn = require('./AceColumn');

var _AceColumn2 = _interopRequireDefault(_AceColumn);

var _Header = require('./datatable/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Row = require('./datatable/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Paginator = require('./datatable/Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _ApiResponse = require('../responses/ApiResponse');

var _ApiResponse2 = _interopRequireDefault(_ApiResponse);

var _JsfElement2 = require('../superclass/JsfElement');

var _JsfElement3 = _interopRequireDefault(_JsfElement2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
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

var AceDataTable = function(_JsfElement) {
  _inherits(AceDataTable, _JsfElement);

  function AceDataTable(props, context) {
    _classCallCheck(this, AceDataTable);

    var _this = _possibleConstructorReturn(this,
        (AceDataTable.__proto__ || Object.getPrototypeOf(AceDataTable)).call(
            this, props, context));

    _this.first = _this.first.bind(_this);
    _this.prev = _this.prev.bind(_this);
    _this.next = _this.next.bind(_this);
    _this.last = _this.last.bind(_this);
    _this.setPage = _this.setPage.bind(_this);
    return _this;
  }

  _createClass(AceDataTable, [
    {
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          getFormId: this.context.getFormId,
          first: this.first,
          prev: this.prev,
          next: this.next,
          last: this.last,
          setPage: this.setPage,
        };
      },
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        this.currentPage = this.props.value.offset / this.props.rows + 1;
        var paginatorTop = this.props.paginator ?
            _react2.default.createElement(_Paginator2.default, {
              top: true,
              pageSize: this.props.rows,
              currentPage: this.currentPage,
              maxResults: this.props.value.max,
            }) :
            null;
        var paginatorBottom = this.props.paginator ?
            _react2.default.createElement(_Paginator2.default, {
              pageSize: this.props.rows, top: false,
              currentPage: this.currentPage,
              maxResults: this.props.value.max,
            }) :
            null;
        var headers = [];
        var columns = [];

        // create all headers and determine all requested columns
        _react2.default.Children.forEach(this.props.children,
            function(child, i) {
              if (child.type === _AceColumn2.default) {
                var column = new child.type(child.props,
                    _this2.getChildContext());
                headers.push(_react2.default.createElement(
                    _Header2.default,
                    {
                      key: i, index: i,
                      parentId: _this2.state.id,
                    },
                    column.header,
                ));
                columns.push(column.column);
              } else {
                throw new _InvalidChildException2.default();
              }
            });
        // generate table rows and insert variable value
        var rows = [];
        for (var i = 0, j = this.props.value.data.length; i < j; i++) {
          rows.push(_react2.default.createElement(
              _Row2.default,
              {
                key: i, parentId: this.state.id, index: i,
                currentPage: this.props.value.offset / this.props.rows,
                pageSize: this.props.rows, 'var': this.props.value.data[i],
                varName: this.props.var,
              },
              columns,
          ));
        }

        return _react2.default.createElement(
            'div',
            {
              className: 'ui-datatable ui-widget',
              id: this.state.id,
            },
            paginatorTop,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            headers,
                        ),
                    ),
                    _react2.default.createElement(
                        'tbody',
                        {className: 'ui-datatable-data ui-widget-content'},
                        rows,
                    ),
                ),
            ),
            paginatorBottom,
        );
      },

      /**
       * goto first page
       */

    }, {
      key: 'first',
      value: function first() {
        this.props.onLoad(1);
      },

      /**
       * goto prev page
       */

    }, {
      key: 'prev',
      value: function prev() {
        this.props.onLoad(this.currentPage - 1);
      },

      /**
       * goto next page
       */

    }, {
      key: 'next',
      value: function next() {
        this.props.onLoad(this.currentPage + 1);
      },

      /**
       * goto last page
       */

    }, {
      key: 'last',
      value: function last() {
        this.props.onLoad(Math.ceil(this.props.value.max / this.props.rows));
      },

      /**
       * goto given page
       */

    }, {
      key: 'setPage',
      value: function setPage(i) {
        this.props.onLoad(i);
      },
    }]);

  return AceDataTable;
}(_JsfElement3.default);

AceDataTable.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.instanceOf(_ApiResponse2.default).isRequired,
  onLoad: _propTypes2.default.func.isRequired,
  rows: _propTypes2.default.number.isRequired,
  var: _propTypes2.default.string.isRequired,
  paginator: _propTypes2.default.bool.isRequired,
};
exports.default = AceDataTable;


AceDataTable.childContextTypes = {
  getFormId: _propTypes2.default.func,
  first: _propTypes2.default.func,
  prev: _propTypes2.default.func,
  next: _propTypes2.default.func,
  last: _propTypes2.default.func,
  setPage: _propTypes2.default.func,
};

AceDataTable.contextTypes = {
  getFormId: _propTypes2.default.func,
};