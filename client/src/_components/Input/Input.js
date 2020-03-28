import React, { Fragment } from "react";
//Conditional Classenames
import classnames from "classnames";

export const Input = ({
  id,
  placeholder,
  type,
  label,
  info,
  name,
  enctype,
  error,
  onChange,
  value,
  required,
  disabled,
  checked,
  invalid,
  autofocus
}) => {
  return (
    <Fragment>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        encType={enctype}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        autoFocus={autofocus}
        required={required}
        disabled={disabled}
        invalid={invalid}
        className={classnames("full-width input")}
      />
      {info && <div className="text-muted">{info}</div>}
      {error && <div className="invalid-feedback">{error}</div>}
    </Fragment>
  );
};
