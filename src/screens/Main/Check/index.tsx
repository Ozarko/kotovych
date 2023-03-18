import { useState } from "react";
import { ActionButton } from "../../../components/ActionButton";
import { useTranslation } from "../../../context/useTranslation";
import { useScrollBlock } from "../../../hooks/useScrollBlock";
import { LevelCheck } from "../../LevelCheck";
import "./check.scss";

export const Check = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const {
    schema: { check },
  } = useTranslation();

  const handleModalStateChange = () => {
    if (isModalOpen) {
      allowScroll();
    } else {
      blockScroll();
    }

    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <LevelCheck
        isOpen={isModalOpen}
        handleOpenState={handleModalStateChange}
      />
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
