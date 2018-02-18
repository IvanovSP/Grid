import React from 'react';

import Shortid from 'shortid';
import PropTypes from 'prop-types';
import Thead from './Thead';
import Tbody from './Tbody';
import Trow from './Trow';

export default class Table extends React.Component {
  static handleClick(e) {
    const tdStyle = e.target.style;
    tdStyle.backgroundColor = '#bcdeff';
    setTimeout(() => {
      tdStyle.backgroundColor = '';
    }, 100);
  }

  render() {
    const { collection, valuesFormat, removeRow } = this.props;

    const mappedRows = collection.rows.map((gridRow, i) => {
      const id = Shortid.generate();
      return (
        <Trow
          key={id}
          cells={gridRow}
          columns={collection.columns}
          valuesFormat={valuesFormat}
          removeRow={removeRow}
        >
          <th>
            <span
              role="link"
              tabIndex="-1"
              className="glyphicon glyphicon-remove text-danger"
              onClick={() => { removeRow(i); }}
              onKeyDown={() => { removeRow(i); }}
            />
          </th>
        </Trow>
      );
    });

    return (
      <table role="grid" className="table table-bordered" onClick={Table.handleClick}>
        <Thead headers={collection.columns}>
          <th />
        </Thead>
        <Tbody>
          {mappedRows}
        </Tbody>
      </table>
    );
  }
}

Table.defaultProps = {
  collection: {},
  valuesFormat: {},
  removeRow: (() => {}),
};

Table.propTypes = {
  collection: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.object),
    rows: PropTypes.arrayOf(PropTypes.object),
  }),
  valuesFormat: PropTypes.shape({
    expression: PropTypes.string,
    substring: PropTypes.string,
  }),
  removeRow: PropTypes.func,
};
