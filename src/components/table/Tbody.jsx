import React from 'react';
import PropTypes from 'prop-types';

export default function Tbody({ children }) {
  return (
    <tbody>
      {children}
    </tbody>
  );
}

Tbody.defaultProps = {
  children: undefined,
};

Tbody.propTypes = {
  children: PropTypes.node,
};

