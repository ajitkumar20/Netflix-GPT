import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieName } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80 rounded-lg">
      <div>
        <MovieList title={movieName} movies={movieResults} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
