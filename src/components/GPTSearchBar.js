import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { API_OPTIONS, BG_IMG_URL } from "../utils/constants";
import { useRef } from "react";
import openai from "../utils/openai";
import { addGPTMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchTextGPT = useRef();
  const searchTextDB = useRef();
  const langID = useSelector((store) => store.config?.lang);
  const dispatch = useDispatch();

  // search movies in TMDB with Movie Name
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleOnclickGPTSearchButton = async (isGPTSearch) => {
    if (isGPTSearch) {
      searchTextDB.current.value = "";
    } else {
      searchTextGPT.current.value = "";
    }
    const searchText = isGPTSearch ? searchTextGPT : searchTextDB;

    const gptQuery =
      "You are a movie recommendation system. Suggest five movies for the query: '" +
      searchText.current.value +
      "'. Only return the names of five movies, comma-separated, like this example: 'Kalki, Sahoo, Chatrapati, Bahubali, Aadipurush'. Important: Do not use numbering. If the query specifies a language or genre (e.g., Telugu movies or Hindi movies), only suggest movies in that language or genre.";

    // const gptQuery =
    //   "give me five movie names with comma seperated, according my query : " +
    //   searchText.current.value +
    //   ", Example : kalki,sahoo,chatrapati,bahubali,aadipurush ";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptSearchResults.choices) {
      //TODO: Error handling}
    }
    // 'Andaz Apna Apna', ' Chupke Chupke', ' Chhoti Si Baat', ' Padosan', ' Gol Maal'
    let movieNamesArray;
    if (isGPTSearch) {
      movieNamesArray =
        gptSearchResults.choices[0]?.message?.content?.split(",");
    } else {
      movieNamesArray = [searchText.current.value];
    }

    // For each movie search TMDB API
    const promisesArray = movieNamesArray.map((movieName) =>
      searchMovieTMDB(movieName)
    );
    const movieDetailsArray = await Promise.all(promisesArray);

    // Dispatch movie details to Redux state
    dispatch(
      addGPTMovies({
        movieNames: movieNamesArray,
        movieResults: movieDetailsArray,
      })
    );
  };

  const renderForm = (isGPTSearch) => (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="pl-1 pb-1 w-full bg-gray-900 m-auto rounded-md"
    >
      <label
        className="md:p-4 text-white opacity-70 text-[5px] md:text-sm"
        htmlFor="searchinput"
      >
        {isGPTSearch ? lang[langID].gptSearchlabel : lang[langID].dbSearchlabel}
      </label>
      <div className="md:p-4 pt-1 grid grid-cols-12 rounded-md">
        <input
          id="searchinput"
          ref={isGPTSearch ? searchTextGPT : searchTextDB}
          className="col-span-9 px-1 md:p-4 rounded-sm md:rounded-lg outline-none text-[5px] md:text-lg font-serif font-thin opacity-60 "
          type="text"
          placeholder={
            lang[langID]
              ? lang[langID]?.gptSearchPlaceholder
              : lang["en"].gptSearchPlaceholder
          }
        />
        <button
          onClick={() => handleOnclickGPTSearchButton(isGPTSearch)}
          className="col-span-3 bg-violet-600 mx-1 md:ml-4 text-[8px] md:text-[18px] text-amber-100 rounded-sm md:rounded-md md:px-2 font-serif md:font-semibold opacity-80"
        >
          {lang[langID] ? lang[langID]?.search : lang["en"].search}
        </button>
      </div>
    </form>
  );

  return (
    <div className="flex">
      <div className="absolute -z-20 w-full h-full top-0 left-0">
        <img
          className="fixed w-full h-full object-cover"
          alt="backgroundImage"
          src={BG_IMG_URL}
        />
      </div>
      {/* <div
        className="absolute -z-20 w-full h-full bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMG_URL})` }}
      >
      </div> */}

      {/* <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 bg-gray-800 m-auto mt-[10%] p-4 grid grid-cols-12 rounded-md"
      >
        <input
          ref={searchText}
          className="col-span-9 p-4 rounded-md outline-none text-xl font-serif font-thin opacity-30 "
          type="text"
          placeholder={
            lang[langID]
              ? lang[langID]?.gptSearchPlaceholder
              : lang["en"].gptSearchPlaceholder
          }
        />
        <button
          onClick={handleOnclickGPTSearchButton}
          className="col-span-3 bg-violet-600 ml-4 rounded-md"
        >
          {lang[langID] ? lang[langID]?.search : lang["en"].search}
        </button>
      </form> */}
      <div className="w-full flex justify-between items-center mt-[33%] md:mt-[7%] px-1 md:px-8">
        <div className="w-1/2 m-1 md:mw-1/3">{renderForm(false)}</div>
        <div className="w-1/2 m-1">{renderForm(true)}</div>
      </div>
    </div>
  );
};

export default GPTSearchBar;
