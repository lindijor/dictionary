import React from "react";

export default function Meanings(props) {
  return (
    <div>
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      <p className="example">{props.meaning.example}</p>
    </div>
  );
}
