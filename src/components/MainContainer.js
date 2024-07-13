import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1];
  //   console.log(mainMovie);

  const {
    original_title,
    overview,
    id,
    release_date,
    vote_average,
    poster_path,
  } = mainMovie;

  return (
    <div className="pt-[32%] bg-black md:pt-0">
      <VideoTitle
        title={original_title}
        description={overview}
        id={id}
        releaseDate={release_date}
        rating={vote_average}
        posterPath={poster_path}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
