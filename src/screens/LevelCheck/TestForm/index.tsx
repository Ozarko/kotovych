import { ChangeEvent, FC, useMemo, useState } from "react";
import { ActionButton } from "../../../components/ActionButton";
import { Input } from "../../../components/Input";
import { useTranslation } from "../../../context/useTranslation";
import { useTests } from "../../../context/useTests";

import "./testForm.scss";

interface TestFormProps {
  onSubmit: () => void;
}

const PHONE_REGEX: RegExp =
  /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

export const TestForm: FC<TestFormProps> = ({ onSubmit }) => {
  const { setUserInfo } = useTests();
  const [isTouched, setIsTouched] = useState({
    name: false,
    phone: false,
  });

  const {
    schema: {
      levelCheck: {
        form: { title, placeHolders, actionButton, errors },
      },
    },
  } = useTranslation();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (isTouched.name) setIsTouched({ ...isTouched, name: true });
  };

  const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    if (isTouched.phone) setIsTouched({ ...isTouched, phone: true });
  };

  const formErrors = useMemo(() => {
    return Object.keys(errors).reduce((acc, key: string) => {
      if (acc) return acc;
      if (
        (!phone || !PHONE_REGEX.test(phone)) &&
        key === "phone" &&
        isTouched.phone
      )
        return (acc = errors[key as keyof typeof errors]);
      if (!name && key === "name" && isTouched.name)
        return (acc = errors[key as keyof typeof errors]);
      return acc;
    }, "");
  }, [errors, isTouched, name, phone]);

  const handleStartClick = () => {
    if (!isTouched.name || !isTouched.phone)
      setIsTouched({ name: true, phone: true });
    if (!name || !phone || formErrors) return;
    setUserInfo({
      name,
      phone,
    });
    onSubmit();
  };

  return (
    <div className="test-form">
      <h3>{title}</h3>
      <div className="test-form-wrapper">
        <div className="test-form-inputs">
          <Input
            type={"text"}
            name={placeHolders.name}
            value={name}
            onChange={onNameChange}
          />
          <Input
            type={"phone"}
            name={placeHolders.phone}
            value={phone}
            onChange={onPhoneChange}
          />
        </div>
        <div className="test-form-errors">
          <p>{formErrors}</p>
        </div>
        <div>
          <ActionButton label={actionButton} onClick={handleStartClick} />
        </div>
      </div>
    </div>
  );
};
