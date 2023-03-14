import React from "react";
import { useTranslation } from "../../context/useTranslation";
import "./show-case.scss";

const ShowCaseList = () => {
  const {
    schema: {
      about: { showCase },
    },
  } = useTranslation();
  const dotClass = ["dot-g", "dot-t", "dot-y", "dot-g", "dot-y", "dot-r"];

  return (
    <div className="list">
      <div className="list-item">
        {showCase.map((item, index) => {
          return (
            <div key={`${item}-${Math.random().toString()}`}>
              <span>
                <p className={`list-item-dot ${dotClass[index + 1]}`}></p>
              </span>
              <span className="list-item-txt">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ShowCase = () => {
  return (
    <div className="show-case">
      <div className="show-case-wrapper">
        <ShowCaseList />
        <ShowCaseList />
        <ShowCaseList />
      </div>
    </div>
  );
};
