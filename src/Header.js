import React, { useState } from "react";
import "./Header.css";
import axios from "axios";

export default function Header() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiKey = "025000aa1bof6148etc27f34c35bd48a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="header">
      <h1>Dictionary</h1>
      <h2>What do you want to learn more about?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word or a phrase..."
          className="searchBar"
          onChange={handleKeyword}
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
      <p>
        <i>e.g. flower, sunset, chair, giraffe...</i>
      </p>
    </div>
  );
}
