import { QuestionItem, useTests } from "../../../context/useTests";
import "./result.scss";

interface ResultType {
  index: number;
  userAnswer: string;
  correctAnswer: string;
  question: string[];
}

export const Result = () => {
  const { questions, userAnswers, score} = useTests();
  const result = questions.reduce(
    (acc: ResultType[], testItem: QuestionItem, index: number) => {
      if (testItem.answer !== userAnswers[index]) {
        const correctAnswer = testItem.variants[testItem.answer];
        const userAnswer = testItem.variants[userAnswers[index]];
        return [
          ...acc,
          {
            index: index + 1,
            question: testItem.question,
            userAnswer,
            correctAnswer,
          },
        ];
      }
      return acc;
    },
    []
  );

  const level = score > 80 ? "Advanced" : score > 60 ? "Intermediate" : "Beginner";

  return (
    <div className="result">
      <h2>Congratulations</h2>
      <p>
        on completing the English language proficiency test on our website! Your
        results have been received and analyzed. Based on your answers, you have
        been placed in the following proficiency level: [insert level here]
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
    </div>
  );
};
