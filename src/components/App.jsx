import React, { useState, useEffect } from "react";
import data from "../sample_data.json";
import "../css/App.css";
import NextQuestion from "./NewQuestion";
import Question from "./Question";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionState, setQuestionState] = useState("unanswered");
  const [questionAnswer, setQuestionAnswer] = useState(null);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  useEffect(() => {
    setTimeout(function () {
      //alert("Time ran out");
      setQuestionNumber(0);
      setQuestionState("unanswered");
      setQuestionAnswer(null);
    }, 60 * 15 * 1000);
  }, []);

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
        function={(index) => {
          setQuestionAnswer(index);
          if (index === data[questionNumber].question.correct_choice_index) {
            setCorrectGuesses(correctGuesses + 1);
          }
        }}
        data={data[questionNumber].question}
      />
      <NextQuestion function={() => setQuestionNumber(questionNumber + 1)} />

      <p>The correct answer is: {correctAnswer}</p>
      <p> {message} </p>

      <button onClick={() => setQuestionState("isAnswered")}>
        Click for correct answer
      </button>
      <p>The correct guesses is: {correctGuesses}</p>
    </div>
  );
}

export default App;
