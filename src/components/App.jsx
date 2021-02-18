import React, { useState } from "react";
import data from "../sample_data.json";
import "../css/App.css";

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
      <Question function={(index) => setQuestionAnswer(index)} data={data[questionNumber].question}/>
      <NextQuestion function={() => setQuestionNumber(questionNumber + 1)} />

      <p>The correct answer is: {correctAnswer}</p>
      <p> {message} </p>

      <button onClick={() => setQuestionState("isAnswered")}>
        Click for correct answer
      </button>
    </div>
  );
}

function Question(props) {
  return (
    <div>
      <h1>{props.data.text}</h1>
      {props.data.choices.map((choice, index) => {
        return (
          <div key={index} onClick={() => props.function(index)}>
            <Answer key={index} choice={choice} />
          </div>
        );
      })}
    </div>
  );
}

function NextQuestion(props) {
  return <button onClick={props.function}>Next Question</button>;
}

function Answer(props) {
  return <h1>{props.choice}</h1>;
}

export default App;
