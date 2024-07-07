import { POSTER_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 pr-3">
      <img alt="movie-card" src={POSTER_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
