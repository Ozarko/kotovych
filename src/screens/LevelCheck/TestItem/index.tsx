import { FC, useState } from "react";
import { ActionButton } from "../../../components/ActionButton";
import "./test-item.scss";

interface TestItemProps {
  question: string[];
  variants: {
    [key: string]: string;
  };
  handleAnswerOptionClick: (variant: string) => void;
}

interface SelectedItem {
  variant: string;
  value: string;
}

const DEFAULT_SELECTED: SelectedItem = {
  variant: "",
  value: "",
};

export const TestItem: FC<TestItemProps> = ({
  question,
  variants,
  handleAnswerOptionClick,
}) => {
  const [showError, setShowError] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectedItem>(DEFAULT_SELECTED);
  const variantsArray = Object.entries(variants);

  const handleSelect = (variant: string, value: string) => {
    setSelected({ variant, value });
  };

  const handleNext = () => {
    if (!selected.variant) {
      setShowError(true);
      return;
    }
    if(showError) setShowError(false)
    handleAnswerOptionClick(selected.value);
    setSelected(DEFAULT_SELECTED);
  };

  return (
    <div className="test-item">
      <div className="test-item-container">
        <h2 className="test-item-container-question">
          {question[0]}
          <span
            className={`test-item-container-question-value ${
              selected.value[0] === "'" ? "" : "space"
            }`}
          >
            {selected.value}
          </span>
          {question[1]}
        </h2>
      </div>
      <div className="test-item-container">
        <div className="test-item-container-option">
          {variantsArray.map(([key, value]) => {
            const isSelected = selected.variant === key ? " selected" : "";
            const onSelect = () => handleSelect(key, value);
            return (
              <button
                onClick={onSelect}
                key={key}
                className={`test-item-container-option-button${isSelected}`}
              >
                <span>{key})</span>
                <span>{value}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="test-item-container">
        <div className="test-item-container-error">
          {showError && (
            <p className="test-item-container-error">
              Please choose one of the test options
            </p>
          )}
        </div>
        <div className="test-item-container-next">
          <ActionButton label={"next"} onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};
