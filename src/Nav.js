import React, { useContext } from "react";
import { MovieContext } from "./context/MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>FullyDaddy</h3>
      <p>List of movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
