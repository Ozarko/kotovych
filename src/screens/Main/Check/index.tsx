import { ActionButton } from "../../../components/ActionButton";
import { useTests } from "../../../context/useTests";
import { useTranslation } from "../../../context/useTranslation";
import "./check.scss";

export const Check = () => {
  const {
    schema: { check },
  } = useTranslation();

  const { handleModalStateChange } = useTests();

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
