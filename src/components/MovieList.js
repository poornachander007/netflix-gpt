import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   if (!movies) return;
  //   const movie = movies[0];
  return (
    <div className="MovieList">
      <h1 className="text-lg md:text-3xl py-2 md:py-4 text-white">{title}</h1>
      <div className="list flex overflow-x-auto">
        <div className="cards flex pb-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

// const MovieList = ({ title, movies }) => {
//   return (
//     <div className="px-6 ">
//       <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
//       <div className="flex overflow-x-scroll">
//         <div className="flex">
//           {movies?.map((movie) => (
//             <MovieCard key={movie.id} posterPath={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MovieList;
