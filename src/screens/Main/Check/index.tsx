import { FC } from "react";
import { ActionButton } from "../../../components/ActionButton";
import { useTranslation } from "../../../context/useTranslation";
import "./check.scss";

interface CheckProps {
  handleModalStateChange: () => void;
}

export const Check: FC<CheckProps> = ({ handleModalStateChange }) => {
  const {
    schema: { check },
  } = useTranslation();

  return (
    <>
      <section className="check" id="check">
        <div className="check-section">
          <p>{check.description}</p>
        </div>
        <div className="check-section">
          <div className="check-section-button">
            <ActionButton
              onClick={handleModalStateChange}
              label={check.buttonLabel}
            />
          </div>
        </div>
      </section>
    </>
  );
};
