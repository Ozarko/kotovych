import { createContext, FC, useState, useContext } from "react";
import { WithChildren } from "../types/general";
import questions from "../schemas/test.json";
import { useScrollBlock } from "../hooks/useScrollBlock";
import useLocalStorage from "../hooks/useLocalStorage";

export enum TestCancelActions {
  CANCEL = "CANCEL",
  SAVE_AND_EXIT = "SAVE_AND_EXIT",
  EXIT = "EXIT",
  RESET = "RESET",
}

export interface TestContext {
  isModalOpen: boolean;
  currentQuestion: number;
  showScore: boolean;
  score: number;
  questions: any;
  userAnswers: string[];
  handleAnswerOptionClick: (answer: string) => void;
  isTestStarted: boolean;
  handleTestsState: () => void;
  showCancel: boolean;
  handleModalStateChange: (actions?: TestCancelActions) => void;
}

const DEFAULT_CONTEXT_STATE: TestContext = {
  isModalOpen: false,
  currentQuestion: 1,
  showScore: false,
  score: 0,
  questions,
  userAnswers: [],
  handleAnswerOptionClick: (answer: string) => {},
  isTestStarted: false,
  handleTestsState: () => {},
  showCancel: false,
  handleModalStateChange: () => {},
};

const TestsContext = createContext(DEFAULT_CONTEXT_STATE);

export const TestContextProvider: FC<WithChildren> = ({ children }) => {
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    "userAnswers",
    {
      userAnswers: DEFAULT_CONTEXT_STATE.userAnswers,
      currentQuestion: DEFAULT_CONTEXT_STATE.currentQuestion,
      score: DEFAULT_CONTEXT_STATE.score,
    }
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    localStorageValue.currentQuestion
  );
  const [score, setScore] = useState(localStorageValue.score);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>(
    localStorageValue.userAnswers
  );

  const [blockScroll, allowScroll] = useScrollBlock();

  const handleModalOpen = () => {
    blockScroll();
    setIsModalOpen(true);
    return;
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    allowScroll();
    return;
  };

  const handleResetClick = () => {
    setIsTestStarted(false);
    setCurrentQuestion(1);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setShowCancel(false);
    setLocalStorageValue({
      userAnswers: [],
      currentQuestion: 1,
      score: 0,
    });
  };

  const handleSave = () => {
    setLocalStorageValue({
      userAnswers,
      currentQuestion,
      score,
    });
  };

  const handleActions = (actions: TestCancelActions) => {
    switch (actions) {
      case TestCancelActions.CANCEL:
        setShowCancel(false);
        return;
      case TestCancelActions.SAVE_AND_EXIT:
        handleModalClose();
        handleSave();
        setShowCancel(false);
        return
      case TestCancelActions.EXIT:
        handleModalClose();
        handleResetClick();
        return;
      case TestCancelActions.RESET:
        return handleResetClick();
      default:
        return;
    }
  };

  const handleModalStateChange = (actions?: TestCancelActions) => {
    if (!isModalOpen) return handleModalOpen();

    if (!actions && !showScore && !showCancel && isTestStarted)
      return setShowCancel(true);

    if (actions && !showScore && isTestStarted) return handleActions(actions);
    return handleModalClose();
  };

  const handleAnswerOptionClick = (userAnswer: string) => {
    setUserAnswers((prev) => [...prev, userAnswer]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleTestsState = () => {
    setIsTestStarted((prev) => !prev);
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
        isTestStarted,
        handleTestsState,
        showCancel,
        handleModalStateChange,
        isModalOpen,
      }}
    >
      {children}
    </TestsContext.Provider>
  );
};

export const useTests = () => useContext(TestsContext);
