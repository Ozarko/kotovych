import React from "react";
import { FC } from "react";
import "./action-button.scss";

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const ActionButton: FC<ActionButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button className="action-button" onClick={onClick} disabled={!!disabled}>
      {label}
    </button>
  );
};
