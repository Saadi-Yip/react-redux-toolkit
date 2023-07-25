import React, { useState } from "react"; 
import { tempWatchedData } from "./data";
import MovieList from "./movieList";
import './styles.css'
import Summary from "./summary";
function Main({ movies }) {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);


  return (
    <main className="main">
      <div className="box">
        <button
          className="btn-toggle x"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && (
          <MovieList movies={movies} />
        )}
      </div>

      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <Summary watched={watched} />
        )}
      </div>
    </main>
  );
}

export default Main;
