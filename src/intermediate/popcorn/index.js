import { useState } from "react";
import "./styles.css";
import Nav from "./nav";
import Main from "./main"; 
import { tempMovieData } from "./data";



export default function App() { 
  const [movies, setMovies] = useState(tempMovieData);


  return (
    <>
      <Nav movies={movies}/>
      <Main movies = {movies}/>
    </>
  );
}
