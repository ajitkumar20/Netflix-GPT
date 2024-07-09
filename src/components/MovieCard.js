import { POSTER_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 pr-3 cursor-pointer hover:scale-125 hover:duration-500">
      <img alt="movie-card" src={POSTER_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
