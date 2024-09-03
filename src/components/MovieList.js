import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   if (!movies) return;
  // console.log(movies);
  //   const movie = movies[0];
  return (
    <div className="MovieList">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="list flex overflow-x-scroll">
        <div className="cards flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
