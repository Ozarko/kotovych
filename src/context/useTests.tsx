import { createContext, FC, useState, useContext } from "react";
import { WithChildren } from "../types/general";
import questions from "../schemas/test.json";

export interface TestContext {
  currentQuestion: number;
  showScore: boolean;
  score: number;
  questions: any;
  userAnswers: string[];
  handleAnswerOptionClick: (answer: string) => void;
}

const DEFAULT_CONTEXT_STATE: TestContext = {
  currentQuestion: 0,
  showScore: false,
  score: 0,
  questions,
  userAnswers: [],
  handleAnswerOptionClick: (answer: string) => {},
};

const TestsContext = createContext(DEFAULT_CONTEXT_STATE);

export const TestContextProvider: FC<WithChildren> = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleAnswerOptionClick = (userAnswer: string) => {
    setUserAnswers((prev) => [...prev, userAnswer]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
  };

  return (
    <TestsContext.Provider
      value={{
        currentQuestion,
        showScore,
        score,
        questions,
        userAnswers,
        handleAnswerOptionClick,
      }}
    >
      {children}
    </TestsContext.Provider>
  );
};

export const useTests = () => useContext(TestsContext);
