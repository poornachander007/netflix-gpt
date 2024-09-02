import { useEffect } from "react";
import { API_OPTIONS, MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchMoviesData = async () => {
    const data = await fetch(MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);
};

export default useNowPlayingMovies;
