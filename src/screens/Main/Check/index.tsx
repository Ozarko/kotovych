import React from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../../components/ActionButton";
import { useTranslation } from "../../../context/useTranslation";
import "./check.scss";

export const Check = () => {
  const {
    schema: { check },
  } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/level-check");
  };

  return (
    <section className="check" id="check">
      <div className="check-section">
        <p>{check.description}</p>
      </div>
      <div className="check-section">
        <div className="check-section-button">
          <ActionButton onClick={handleButtonClick} label={check.buttonLabel} />
        </div>
      </div>
    </section>
  );
};
