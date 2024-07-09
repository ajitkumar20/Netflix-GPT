import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  return (
    <div className="px-5">
      <h1 className="text-2xl py-2 pt-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
