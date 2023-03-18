import { useState } from "react";
import { useTests } from "../../../context/useTests";
import { Intro } from "../Intro";
import { Result } from "../Result";
import { TestItem } from "../TestItem";

export const ModalBody = () => {
  const [testIsStarted, setTestIsStarted] = useState(false);

  const {currentQuestion, questions, handleAnswerOptionClick, showScore} = useTests();

  const handleTestsStart = () => {
    setTestIsStarted(true);
  }

  if (showScore) return <Result />;
  if (!testIsStarted) return <Intro onTestsStart={handleTestsStart} />;

  return (
    <TestItem
      question={questions[currentQuestion - 1].question}
      variants={questions[currentQuestion - 1].variants}
      handleAnswerOptionClick={handleAnswerOptionClick}
    />
  );
};
