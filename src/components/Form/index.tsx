import React, { FC, useState } from "react";
import { useTranslation } from "../../context/useTranslation";
import { ActionButton } from "../ActionButton";
import { Input } from "../Input";

import "./form.scss";

export interface FormDataArgs {
  name: string;
  phone: string;
  message: string;
}

interface FormProps {
  onSubmit: (data: FormDataArgs) => void;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const Form: FC<FormProps> = ({ onSubmit }) => {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredPhone, setEnteredPhone] = useState<string>("");
  const [enteredMessage, setEnteredMessage] = useState<string>("");

  const {
    schema: {
      contacts: { form },
    },
  } = useTranslation();

  const handleNameChange = (e: ChangeEvent) => {
    setEnteredName(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent) => {
    setEnteredPhone(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent) => {
    setEnteredMessage(e.target.value);
  };

  const handleButtonClick = () => {
    onSubmit({
      name: enteredName,
      phone: enteredPhone,
      message: enteredMessage,
    });
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="form-container-inputs">
          <Input
            type={"text"}
            name={form.placeHolders.name}
            required={true}
            value={enteredName}
            onChange={handleNameChange}
          />
          <Input
            type={"phone"}
            name={form.placeHolders.phone}
            required={true}
            value={enteredPhone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-container-textarea">
          <Input
            type={"phone"}
            name={form.placeHolders.message}
            required={true}
            inputType={"textarea"}
            value={enteredMessage}
            onChange={handleMessageChange}
          />
        </div>
        <div>
          <ActionButton label={form.button} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};
