import { useRef } from "react";
// import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTmdb = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(
      addGptMovieResults({
        movieName: searchText.current.value,
        movieResults: json.results,
      })
    );
  };

  const handleSearchClick = () => {
    // console.log(searchText.current.value);
    // const gptQuery =
    //   "Act as a Movie Recommendation System and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". Only give me names of 5 movies, comma seperated like examples given ahead. Example Result: Gadar (year), Don (year)....";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    searchMovieTmdb(searchText.current.value);
    // const promise1 = Promise.resolve(promise);
    // promise1.then((value) => console.log(value));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-3 m-3 rounded-md col-span-9"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 py-2 px-4 my-3 mr-3 text-white bg-red-700 rounded-md"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
