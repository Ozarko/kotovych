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

export type AnswerType = "a" | "b" | "c" | "d";

export interface QuestionItem {
  question: string[];
  variants: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: AnswerType;
}

export interface TestContext {
  isModalOpen: boolean;
  currentQuestion: number;
  showScore: boolean;
  score: number;
  questions: QuestionItem[];
  userAnswers: AnswerType[];
  handleAnswerOptionClick: (answer: AnswerType) => void;
  isTestStarted: boolean;
  handleTestsState: () => void;
  showCancel: boolean;
  handleModalStateChange: (actions?: TestCancelActions) => void;
  handleResetClick: () => void;
  userInfo: {
    name: string;
    phone: string;
  };
  setUserInfo: (userInfo: { name: string; phone: string }) => void;
}

const DEFAULT_CONTEXT_STATE: TestContext = {
  isModalOpen: false,
  currentQuestion: 0,
  showScore: false,
  score: 0,
  questions: questions as QuestionItem[],
  userAnswers: [] as AnswerType[],
  handleAnswerOptionClick: (answer: AnswerType) => {},
  isTestStarted: false,
  handleTestsState: () => {},
  showCancel: false,
  handleModalStateChange: () => {},
  handleResetClick: () => {},
  userInfo: {
    name: "",
    phone: "",
  },
  setUserInfo: (userInfo: { name: string; phone: string }) => {},
};

const DEFAULT_LOCAL_STORAGE_VALUE = {
  userAnswers: DEFAULT_CONTEXT_STATE.userAnswers,
  currentQuestion: DEFAULT_CONTEXT_STATE.currentQuestion,
  score: DEFAULT_CONTEXT_STATE.score,
  userInfo: DEFAULT_CONTEXT_STATE.userInfo,
};

const TestsContext = createContext(DEFAULT_CONTEXT_STATE);

export const TestContextProvider: FC<WithChildren> = ({ children }) => {
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    "userAnswers",
    DEFAULT_LOCAL_STORAGE_VALUE
  );

  const [userInfo, setUserInfo] = useState(localStorageValue.userInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    localStorageValue.currentQuestion
  );
  const [score, setScore] = useState(localStorageValue.score);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState<AnswerType[]>(
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
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setShowCancel(false);
    setLocalStorageValue(DEFAULT_LOCAL_STORAGE_VALUE);
  };

  const handleSave = () => {
    setLocalStorageValue({
      userAnswers,
      currentQuestion,
      score,
      userInfo,
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
        return;
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

  const handleAnswerOptionClick = (userAnswer: AnswerType) => {
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
        questions: questions as QuestionItem[],
        userAnswers,
        handleAnswerOptionClick,
        isTestStarted,
        handleTestsState,
        showCancel,
        handleModalStateChange,
        isModalOpen,
        handleResetClick,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </TestsContext.Provider>
  );
};

export const useTests = () => useContext(TestsContext);
