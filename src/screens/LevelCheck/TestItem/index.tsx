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
  const [selected, setSelected] = useState<SelectedItem>(DEFAULT_SELECTED);
  const variantsArray = Object.entries(variants);

  const handleSelect = (variant: string, value: string) => {
    setSelected({ variant, value });
  };

  const handleNext = () => {
    handleAnswerOptionClick(selected.value);
    setSelected(DEFAULT_SELECTED);
  };

  return (
    <div className="test-item">
      <div className="test-item-container">
        <h2 className="test-item-container-question">
          <span>{question[0]}</span>
          <span className="test-item-container-question-value">{selected.value}</span>
          <span>{question[1]}</span>
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
        <div className="test-item-container-next">
          <ActionButton label={"next"} onClick={handleNext} disabled={!selected.value} />
        </div>
      </div>
    </div>
  );
};
