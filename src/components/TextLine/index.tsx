import { useTranslation } from "../../context/useTranslation";
import "./text-line.scss";

const TextLineList = () => {
  const {
    schema: {
      about: { textLine },
    },
  } = useTranslation();
  const dotClass = ["dot-g", "dot-t", "dot-y", "dot-g", "dot-y", "dot-r"];

  const withDot = textLine.reduce(
    (acc: string[], item: string, index: number) => {
      return [...acc, item, dotClass[index + 1]];
    },
    []
  );

  return (
    <div className="text-line-list">
      {withDot.map((item, index) => {
        return (
          <div
            key={`${item}-${Math.random().toString()}`}
            className="text-line-list-item"
          >
            {item.includes("dot") ? (
              <span className={`text-line-list-item-dot ${item}`} />
            ) : (
              <span className="text-line-list-item-txt">{item}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const TextLine = () => {
  return (
    <div className="text-line">
      <TextLineList />
      <TextLineList />
    </div>
  );
};
