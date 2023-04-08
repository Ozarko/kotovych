import { ActionButton } from "../../../components/ActionButton";
import { useTests } from "../../../context/useTests";
import "./result.scss";
import { getResultLevel } from "../../../utils/getResultLevel";

export const Result = () => {
  const { handleResetClick, userInfo, score, result } = useTests();

  const level = getResultLevel(score);

  return (
    <div className="result">
      <h2>Congratulations {userInfo.name} !</h2>
      <p>
        on completing the English language proficiency test on our website! Your
        results have been received and analyzed. Based on your answers, you have
        been placed in the following proficiency level: {level}
      </p>
      <div className="result-list">
        <h3>Incorrect answers</h3>
        <ul>
          <li className="result-list-underline">
            <p>Question</p>
            <p>Your answer</p>
            <p>Correct answer</p>
          </li>
          {result.map((item) => (
            <li key={item.index}>
              <p>{item.index}) </p>
              <p>
                {item.question[0]}
                <span className="result-list-incorrect">{item.userAnswer}</span>
                {item.question[1]}
              </p>
              <p>
                {item.question[0]}
                <span className="result-list-correct">
                  {item.correctAnswer}
                </span>
                {item.question[1]}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <p>
        Thank you for taking the time to complete our test and we wish you
        success in your language learning journey.
      </p>
      <div className="result-restart">
        <div>
          <ActionButton label="Restart" onClick={handleResetClick} />
        </div>
      </div>
    </div>
  );
};
