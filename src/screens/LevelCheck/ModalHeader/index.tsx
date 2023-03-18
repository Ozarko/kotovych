import React, { FC } from "react";
import { useTests } from "../../../context/useTests";
import "./modal-header.scss";

interface ModalHeaderProps {
  onClose: () => void;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ onClose }) => {
  const { currentQuestion, questions } = useTests();

  const testLength = questions.length || 0;

  return (
    <div className="modal-header">
      <div>
        {currentQuestion && testLength && (
          <h6>
            {currentQuestion}/{testLength}
          </h6>
        )}
      </div>
      <div>
        <h6>English Test</h6>
      </div>
      <div>
        <button className="modal-header-close" onClick={onClose} />
      </div>
    </div>
  );
};
