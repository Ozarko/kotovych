import React, { FC } from "react";
import Modal from "react-modal";

import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { TestContextProvider } from "../../context/useTests";

import "./level-check.scss";

interface LevelCheckProps {
  isOpen: boolean;
  handleOpenState: () => void;
}

export const LevelCheck: FC<LevelCheckProps> = ({
  isOpen,
  handleOpenState,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleOpenState}
      closeTimeoutMS={500}
    >
      <TestContextProvider>
        <section className="level-check">
          <ModalHeader
            onClose={handleOpenState}
          />
          <div className="level-check-container">
            <ModalBody />
          </div>
        </section>
      </TestContextProvider>
    </Modal>
  );
};
