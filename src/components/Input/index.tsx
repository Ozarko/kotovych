import React, { FC, useState } from "react";
import "./input.scss";

interface InputProps {
  type: string;
  name: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  inputType?: string;
}

export const Input: FC<InputProps> = ({
  type,
  name,
  required,
  inputType,
  onChange,
  value,
}) => {
  const isTextArea = inputType === "textarea";
  const labelClass = isTextArea
    ? "wrapper-textarea-label"
    : "wrapper-input-label";
  const inputClass = isTextArea ? "wrapper-textarea" : "wrapper-input";
  const inputClassName = !value ? inputClass : `${inputClass} with-value`;
  const labelClassName = !value ? labelClass : `${labelClass} with-value`;

  // with-value
  return (
    <div className="wrapper">
      {isTextArea ? (
        <textarea
          className={inputClassName}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={inputClassName}
          value={value}
          onChange={onChange}
        />
      )}
      <label htmlFor={name} className={labelClassName}>
        <span className="content-name">{name}</span>
      </label>
      <span />
    </div>
  );
};
