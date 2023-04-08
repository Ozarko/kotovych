import { useTests } from "../../../context/useTests";
import { Cancel } from "../Cancel";
import { Intro } from "../Intro";
import { Result } from "../Result";
import { TestItem } from "../TestItem";

export const ModalBody = () => {
  const {
    currentQuestion,
    questions,
    handleAnswerOptionClick,
    showScore,
    isTestStarted,
    handleTestsState,
    showCancel,
  } = useTests();

  if (showCancel) return <Cancel />;
  if (showScore) return <Result />;
  if (!isTestStarted) return <Intro onTestsStart={handleTestsState} />;

  return (
    <TestItem
      question={questions[currentQuestion].question}
      variants={questions[currentQuestion]?.variants}
      handleAnswerOptionClick={handleAnswerOptionClick}
    />
  );
};
