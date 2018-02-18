import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ text }) {
  return <h1 className="page-header">{text}</h1>;
}

Header.defaultProps = {
  text: '',
};

Header.propTypes = {
  text: PropTypes.string,
};
