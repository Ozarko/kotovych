import React from "react";
import { ActionButton } from "../../../components/ActionButton";
import { useTranslation } from "../../../context/useTranslation";
import "./intro.scss";

export const Intro = () => {
  const {
    schema: { levelCheck },
  } = useTranslation();

  return (
    <div className="intro">
      <h2>{levelCheck.title}</h2>
      <p>{levelCheck.description}</p>
      <div className="intro-button">
        <ActionButton
          label={levelCheck.actionButton}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};
