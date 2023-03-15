import React, { FC, useEffect, useMemo, useState } from "react";
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

interface FormValidationObject {
  name: boolean;
  phone: boolean;
  message: boolean;
}

const PHONE_REGEX: RegExp =
  /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

const defaultValidationObject: FormValidationObject = {
  name: false,
  phone: false,
  message: false,
};

export const Form: FC<FormProps> = ({ onSubmit }) => {
  const {
    schema: {
      contacts: {
        form: { errors: errorsSchema },
      },
    },
  } = useTranslation();

  const [isTouched, setIsTouched] = useState<FormValidationObject>(
    defaultValidationObject
  );
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredPhone, setEnteredPhone] = useState<string>("");
  const [enteredMessage, setEnteredMessage] = useState<string>("");
  const [errors, setErrors] = useState<FormValidationObject>(
    defaultValidationObject
  );

  const errorMessage = useMemo(() => {
    return Object.keys(errors).reduce((acc, key: string) => {
      if (errors[key as keyof FormValidationObject] && !acc) {
        return (acc = errorsSchema[key as keyof FormValidationObject]);
      }
      return acc;
    }, "");
  }, [errors, errorsSchema]);

  const {
    schema: {
      contacts: { form },
    },
  } = useTranslation();

  const handleNameChange = (e: ChangeEvent) => {
    setEnteredName(e.target.value);
    if (!isTouched.name) setIsTouched((prev) => ({ ...prev, name: true }));
  };

  const handlePhoneChange = (e: ChangeEvent) => {
    setEnteredPhone(e.target.value);
    if (!isTouched.phone) setIsTouched((prev) => ({ ...prev, phone: true }));
  };

  const handleMessageChange = (e: ChangeEvent) => {
    setEnteredMessage(e.target.value);
    if (!isTouched.message)
      setIsTouched((prev) => ({ ...prev, message: true }));
  };

  const handleButtonClick = () => {
    setIsTouched({
      name: true,
      phone: true,
      message: true,
    });
    if (
      !Object.values(errors).some((error) => error) &&
      Object.values(isTouched).every((touched) => touched)
    ) {
      onSubmit({
        name: enteredName,
        phone: enteredPhone,
        message: enteredMessage,
      });
      setErrors(defaultValidationObject);
      setIsTouched(defaultValidationObject);
      setEnteredName("");
      setEnteredPhone("");
      setEnteredMessage("");
    }
  };

  useEffect(() => {
    setErrors({
      name: !enteredName && isTouched.name,
      phone:
        (!enteredPhone && isTouched.phone) ||
        (isTouched.phone && !PHONE_REGEX.test(enteredPhone)),
      message: !enteredMessage && isTouched.message,
    });
  }, [enteredName, enteredPhone, enteredMessage, isTouched]);

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
            isError={errors.name}
          />
          <Input
            type={"phone"}
            name={form.placeHolders.phone}
            required={true}
            value={enteredPhone}
            onChange={handlePhoneChange}
            isError={errors.phone}
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
            isError={errors.message}
          />
        </div>
        <div className="form-container-error">
          <p>{errorMessage}</p>
        </div>
        <div>
          <ActionButton label={form.button} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};
