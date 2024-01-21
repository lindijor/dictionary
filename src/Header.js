import React, { useState } from "react";
import "./Header.css";
import axios from "axios";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Images from "./Images.js";

export default function Header() {
  let [keyword, setKeyword] = useState("");
  let [response, setResponse] = useState(null);
  let [images, setImages] = useState(null);

  function handleDictionaryResponse(response) {
    setResponse(response.data);
  }

  function handleImageResponse(response) {
    setImages(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "025000aa1bof6148etc27f34c35bd48a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="header">
        <h1>Dictionary</h1>
        <h2>What do you want to learn more about?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a word..."
            className="searchBar"
            onChange={handleKeyword}
          />
          <input type="submit" value="Search" className="searchButton" />
          <div className="hint">e.g. flower, sunset, chair, giraffe...</div>
        </form>
      </div>
      <div>
        <Main response={response} />
      </div>
      <div>
        <Images images={images} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
