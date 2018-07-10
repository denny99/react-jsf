import React from 'react';
import PropTypes from 'prop-types';
import VarInjector from '../../util/VarInjector';

export default class Row extends React.Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    parentId: PropTypes.string.isRequired,
    var: PropTypes.object.isRequired,
    varName: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {};
    this.state[this.props.varName] = this.props.var;

    this.getRowId = this.getRowId.bind(this);
  }

  getRowId(id) {
    if (id) {
      return this.props.parentId + ':' + this.props.index + ':' + id;
    }
    return '';
  }

  getChildContext() {
    return {
      getFormId: this.getRowId,
      first: this.first,
      prev: this.prev,
      next: this.next,
      last: this.last,
      setPage: this.setPage,
      registerAtAll: this.context.registerAtAll,
      registerAtForm: this.context.registerAtForm,
    };
  }

  render() {
    let columns = [];
    for (let i = 0, j = this.props.children.length; i < j; i++) {
      let column = this.props.children[i];
      let convertedColumn = VarInjector.inject(column, this.props.varName,
          this.props.var);
      columns.push(<td key={i}>{convertedColumn}</td>);
    }

    return (
        <tr className={this.props.index % 2 === 0 ?
            'ui-datatable-even' :
            'ui-datatable-odd'}
            id={`${this.props.parentId}_row_${this.props.currentPage *
            this.props.pageSize + this.props.index}`} tabIndex="0">
          {columns}
        </tr>
    );
  }
}

Row.childContextTypes = {
  getFormId: PropTypes.func,
  first: PropTypes.func,
  prev: PropTypes.func,
  next: PropTypes.func,
  last: PropTypes.func,
  setPage: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
};

Row.contextTypes = {
  getFormId: PropTypes.func,
  registerAtAll: PropTypes.func,
  registerAtForm: PropTypes.func,
};
