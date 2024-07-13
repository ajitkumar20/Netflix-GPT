import { useNavigate } from "react-router-dom";
import { POSTER_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailerDetails } from "../utils/movieTrailerSlice";

const MovieCard = ({
  id,
  title,
  description,
  releaseDate,
  rating,
  posterPath,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!posterPath) return null;

  const handleClickMovie = () => {
    dispatch(
      addMovieTrailerDetails({
        id: id,
        title: title,
        description: description,
        releaseDate: releaseDate,
        rating: rating,
        posterPath: posterPath,
      })
    );
    navigate("/movie");
  };

  return (
    <div
      className="w-36 pr-3 cursor-pointer hover:scale-125 hover:duration-500"
      onClick={handleClickMovie}
    >
      <img alt="movie-card" src={POSTER_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
