import React from "react";
import "./Main.css";

export default function Main(props) {
  if (props.response) {
    return (
      <div className="main">
        <h2>{props.response.word}</h2>
        <p>[{props.response.phonetic}]</p>
        <p>Synonyms: {props.response.meanings[0].synonyms}</p>
        <h3 className="partOfSpeech">
          {props.response.meanings[0].partOfSpeech}
        </h3>
        <p className="definition">{props.response.meanings[0].definition}</p>
        <p className="example">{props.response.meanings[0].example}</p>
      </div>
    );
  } else {
    return null;
  }
}
