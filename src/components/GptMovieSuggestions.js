import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieName } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="m-1 p-3 mt-3 md:p-4 md:m-4 bg-black text-white bg-opacity-80 rounded-lg">
      <div>
        <MovieList title={movieName} movies={movieResults} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
