import React from "react";
import { FC } from "react";
import "./action-button.scss";

interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

export const ActionButton: FC<ActionButtonProps> = ({ label, onClick }) => {
  return (
    <button className="action-button" onClick={onClick}>
      {label}
    </button>
  );
};
