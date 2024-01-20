import React from "react";
import "./Main.css";
import Meanings from "./Meanings.js";

export default function Main(props) {
  if (props.response) {
    return (
      <div className="mainBody">
        <div className="main">
          <h2>{props.response.word}</h2>
          <p>[{props.response.phonetic}]</p>
          {props.response.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
