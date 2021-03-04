import React, { useState } from "react";
import data from "../sample_data.json";
import "../css/App.css";
import NextQuestion from "./NewQuestion";
import Question from "./Question";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionState, setQuestionState] = useState("unanswered");
  const [questionAnswer, setQuestionAnswer] = useState(null);

  let message;

  if (questionAnswer !== null) {
    message =
      questionAnswer === data[questionNumber].question.correct_choice_index
        ? "Your answer was right."
        : "Your answer was wrong";
  }

  const correctAnswer =
    questionState === "unanswered"
      ? questionState
      : data[questionNumber].question.correct_choice_index;

  return (
    <div className="app">
      <p>Trivia</p>
      <Question
        function={(index) => setQuestionAnswer(index)}
        data={data[questionNumber].question}
      />
      <NextQuestion function={() => setQuestionNumber(questionNumber + 1)} />

      <p>The correct answer is: {correctAnswer}</p>
      <p> {message} </p>

      <button onClick={() => setQuestionState("isAnswered")}>
        Click for correct answer
      </button>
    </div>
  );
}

export default App;
