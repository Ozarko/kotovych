import { useTests } from "../../../context/useTests";
import "./modal-header.scss";

export const ModalHeader = () => {
  const {
    currentQuestion,
    questions,
    isTestStarted,
    handleModalStateChange,
    showCancel,
  } = useTests();

  const testLength = questions.length || 0;

  const handleClose = () => handleModalStateChange();

  return (
    <div className="modal-header">
      <div>
        {isTestStarted && (
          <h6>
            {currentQuestion}/{testLength}
          </h6>
        )}
      </div>
      <div>
        <h6>English Test</h6>
      </div>
      <div>
        {!showCancel && (
          <button className="modal-header-close" onClick={handleClose} />
        )}
      </div>
    </div>
  );
};
