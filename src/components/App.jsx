import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  const [questionNumber] = useState(0);

  return (
    <div className="app">
      <p>Trivia</p>
      <Question data={data[questionNumber].question}/>
      <NextQuestion />
    </div>
  )
}

function Question(props) {
  return (
    <div>
      <h1>{props.data.text}</h1>
      {props.data.choices.map(choice => <Answer choice={choice}/>)}
    </div>
  )
}

function NextQuestion() {
  return <button>Next Question</button>
}

function Answer(props) {
  return <h1>{props.choice}</h1>
}


export default App;
