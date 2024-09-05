import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const { movieNames, movieResults } = useSelector(
    (store) => store.gpt.gptMovies
  );
  if (!movieNames || !movieResults) return null;

  return (
    <div className="md:mx-5 px-2 md:px-10 mt-3 md:mt-6 bg-black bg-opacity-90 rounded-2xl mb-8">
      {movieNames?.map((movieName, index) => {
        if (movieResults[index]) {
          return <MovieList title={movieName} movies={movieResults[index]} />;
        }
        return null;
      })}
    </div>
  );
};

export default GPTSuggestions;
