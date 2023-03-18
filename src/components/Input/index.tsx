import React, { FC } from "react";
import "./input.scss";

interface InputProps {
  type: string;
  name: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  inputType?: string;
  isError?: boolean;
}

export const Input: FC<InputProps> = ({
  type,
  name,
  inputType,
  onChange,
  value,
  isError,
}) => {
  const isTextArea = inputType === "textarea";
  const labelClass = isTextArea
    ? "wrapper-textarea-label"
    : "wrapper-input-label";
  const inputClass = isTextArea ? "wrapper-textarea " : "wrapper-input";

  const inputClassName = !value ? inputClass : `${inputClass} with-value`;
  const labelClassName = !value ? labelClass : `${labelClass} with-value`;

  // with-value
  return (
    <div className={`wrapper ${isError ? "error" : ""}`}>
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
