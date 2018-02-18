import React from 'react';
import PropTypes from 'prop-types';

export default class Trow extends React.Component {
  static prepareCellsData(cells, columns, valuesFormat) {
    const cellsData = [];
    columns.forEach((column) => {
      if (!cells[column.field]) {
        cellsData.push('');
        return;
      }
      let cellValue = cells[column.field].toString();
      const format = valuesFormat && valuesFormat[column.field];
      if (format) cellValue = cellValue.replace(format.expression, format.substring);
      cellsData.push(cellValue);
    });
    return cellsData;
  }

  render() {
    const { cells = {}, columns = [], valuesFormat = {} } = this.props;
    const tdMap = (cell, i) => <td className="media-body" key={i}>{cell}</td>;
    const tdMapped = Trow.prepareCellsData(cells, columns, valuesFormat).map(tdMap);

    return (
      <tr>
        {this.props.children}
        {tdMapped}
      </tr>
    );
  }
}

Trow.defaultProps = {
  cells: {},
  columns: [],
  children: undefined,
  valuesFormat: {},
};

Trow.propTypes = {
  cells: PropTypes.shape({
    email: PropTypes.string,
    user: PropTypes.string,
    phone: PropTypes.string,
  }),
  columns: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  valuesFormat: PropTypes.shape({
    expression: PropTypes.string,
    substring: PropTypes.string,
  }),
};
