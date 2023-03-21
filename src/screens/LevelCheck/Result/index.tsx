import { useTests } from "../../../context/useTests";

export const Result = () => {
  const { score, questions } = useTests();
  const result = questions

  return (
    <div>
      <p>
        Congratulations on successfully completing your English proficiency test
        on our website! We are thrilled to have helped you assess your language
        skills and determine your level of proficiency. We hope that this will
        empower you in your journey to further develop your English
        communication abilities. Thank you for choosing us as your partner in
        learning English!
      </p>
    </div>
  );
};
