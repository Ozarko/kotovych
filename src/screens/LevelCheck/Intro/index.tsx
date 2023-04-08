import { FC, useState } from "react";
import { useTranslation } from "../../../context/useTranslation";
import "./intro.scss";
import { TestForm } from "../TestForm";
import { ActionButton } from "../../../components/ActionButton";

interface IntroProps {
  onTestsStart: () => void;
}

export const Intro: FC<IntroProps> = ({ onTestsStart }) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(true);
  const {
    schema: { levelCheck },
  } = useTranslation();

  const handleFormSubmit = () => setIsFormVisible(false);

  if (isFormVisible) return <TestForm onSubmit={handleFormSubmit} />;

  return (
    <div className="intro">
      <h2>{levelCheck.title}</h2>
      <p>{levelCheck.description}</p>
      <div>
        <ActionButton label={levelCheck.startTest} onClick={onTestsStart} />
      </div>
    </div>
  );
};
