import React from 'react';
import PropTypes from 'prop-types';

export default function Thead({ headers, children }) {
  const tdMap = (cell, i) => <th key={i}>{cell.header}</th>;
  const thMapped = headers.map(tdMap);
  return (
    <thead>
      <tr>{children}{thMapped}</tr>
    </thead>
  );
}

Thead.defaultProps = {
  headers: [],
  children: undefined,
};

Thead.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
};
