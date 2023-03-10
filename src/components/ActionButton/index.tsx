import { FC } from "react";
import "./action-button.scss";

interface ActionButtonProps {
  label: string;
}

export const ActionButton: FC<ActionButtonProps> = ({ label }) => {
  return <button className="action-button">{label}</button>;
};
