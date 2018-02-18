import React from 'react';
import PropTypes from 'prop-types';


export default function Input({
  label,
  name,
  id,
  handler,
  val,
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
    </div>
  );
}

Input.defaultProps = {
  handler: (() => {}),
  label: '',
  name: '',
  val: '',
  id: '',
};

Input.propTypes = {
  handler: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  val: PropTypes.string,
  id: PropTypes.string,
};
