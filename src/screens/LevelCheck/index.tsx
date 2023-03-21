import Modal from "react-modal";

import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { useTests } from "../../context/useTests";

import "./level-check.scss";

export const LevelCheck = () => {
  const { isModalOpen, handleModalStateChange } = useTests();

  const handleModalClose = () => handleModalStateChange();

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      closeTimeoutMS={500}
    >
      <section className="level-check">
        <ModalHeader />
        <div className="level-check-container">
          <ModalBody />
        </div>
      </section>
    </Modal>
  );
};
