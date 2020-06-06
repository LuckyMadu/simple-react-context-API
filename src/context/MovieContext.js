import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "Rs.1000",
      id: 1,
    },
    {
      name: "GOT",
      price: "Rs.2000",
      id: 2,
    },
    {
      name: "Hulk",
      price: "Rs.500",
      id: 3,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
