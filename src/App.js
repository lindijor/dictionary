import "./App.css";

export default function App() {
  return (
    <div className="header">
      <h1>Dictionary</h1>
      <h2>What do you want to learn more about?</h2>
      <form>
        <input
          type="search"
          placeholder="Type a word or a phrase..."
          className="searchBar"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
      <p>
        <i>e.g. flower, sunset, chair, giraffe...</i>
      </p>
    </div>
  );
}
