import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ handler, classNames, children }) {
  return (
    <button
      onClick={handler}
      type="submit"
      className={classNames.join(' ')}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  handler: (() => {}),
  classNames: [],
  children: undefined,
};

Button.propTypes = {
  handler: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};
