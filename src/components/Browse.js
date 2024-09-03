import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GPTSearchPage from "./GPTSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const showGPTPage = useSelector((store) => store.gpt.showGPTPage);

  return (
    <div className="browse">
      <Header />
      {showGPTPage ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
