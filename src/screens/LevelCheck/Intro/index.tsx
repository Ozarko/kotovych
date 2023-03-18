import { FC } from "react";
import { ActionButton } from "../../../components/ActionButton";
import { useTranslation } from "../../../context/useTranslation";
import "./intro.scss";

interface IntroProps {
  onTestsStart: () => void;
}

export const Intro: FC<IntroProps> = ({ onTestsStart }) => {
  const {
    schema: { levelCheck },
  } = useTranslation();

  return (
    <div className="intro">
      <h2>{levelCheck.title}</h2>
      <p>{levelCheck.description}</p>
      <div className="intro-button">
        <ActionButton label={levelCheck.actionButton} onClick={onTestsStart} />
      </div>
    </div>
  );
};
