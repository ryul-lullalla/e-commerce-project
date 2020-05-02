import React from 'react';
import './form-input.styles.scss';

const FormInPut = ({ handleChange, label, ...otherFormInPutProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherFormInPutProps}
    />
    {label ? (
      <label
        className={`${otherFormInPutProps.value.length ? 'shrink' : ''}
          form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInPut;
