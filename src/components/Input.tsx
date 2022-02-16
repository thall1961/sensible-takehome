import * as React from "react";
import PropTypes from "prop-types";
import {InputProps} from "../models/input-props.model";
import {inputTypes} from "../models/constants";

function Input({ name, type, content = "", id }: InputProps) {
  return (
    <label htmlFor={name}>
      <input
        type={type}
        placeholder={name}
        name={name}
        id={id}
        className={`${type === 'text' ? 'form-control' : 'radio'}`}
      />
      {content}
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(inputTypes).isRequired,
  content: PropTypes.string,
};

export default Input;
