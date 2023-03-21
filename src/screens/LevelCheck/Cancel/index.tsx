import { ActionButton } from "../../../components/ActionButton";
import { TestCancelActions, useTests } from "../../../context/useTests";

import "./cancel.scss";

export const Cancel = () => {
  const { handleModalStateChange } = useTests();

  const handleCancel = () => handleModalStateChange(TestCancelActions.CANCEL);
  const handelSaveAndExit = () =>
    handleModalStateChange(TestCancelActions.SAVE_AND_EXIT);
  const handleExit = () => handleModalStateChange(TestCancelActions.EXIT);

  return (
    <div className="cancel">
      <p>Are you sure you want to exit the test and cancel it?</p>
      <div className="cancel-buttons">
        <div>
          <ActionButton label={"Cancel"} onClick={handleCancel} />
        </div>
        <div>
          <ActionButton label={"Save and Exit"} onClick={handelSaveAndExit} />
        </div>
        <div>
          <ActionButton label={"Exit"} onClick={handleExit} />
        </div>
      </div>
    </div>
  );
};
