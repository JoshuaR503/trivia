import React from "react";
import Answer from "./Answer";
export default function Question(props) {
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
