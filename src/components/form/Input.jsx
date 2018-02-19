import React from 'react';
import PropTypes from 'prop-types';


export default function Input({
  label,
  name,
  id,
  handler,
  val,
  valid,
  invalidMessage,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id} >
        {label}
        <input
          type="text"
          name={name}
          onChange={handler}
          value={val}
          className="form-control"
          id={id}
        />
      </label>
      <span className="error">{!valid && invalidMessage}</span>
    </div>
  );
}

Input.defaultProps = {
  handler: (() => {}),
  invalidMessage: '',
  valid: true,
  label: '',
  name: '',
  val: '',
  id: '',
};

Input.propTypes = {
  handler: PropTypes.func,
  valid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  val: PropTypes.string,
  id: PropTypes.string,
};
