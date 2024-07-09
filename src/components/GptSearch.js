import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import netbg from "../assets/images/netflix_bg.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={netbg} alt="netflixbg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
