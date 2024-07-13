import { useSelector } from "react-redux";
import Logo from "../assets/images/Netflix_Logo_PMS.png";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";
import { useEffect, useState } from "react";
import { POSTER_CDN_URL } from "../utils/constant";
import Footer from "./Footer";

const ShowMovieTrailer = () => {
  const navigate = useNavigate();
  const [videoKey, setVideokey] = useState(null);
  const { id, title, description, rating, releaseDate, posterPath } =
    useSelector((store) => store.trailer);
  if (!id) return <Error />;

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    if (!trailer) return;
    setVideokey(trailer.key);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  const handleBackClick = () => {
    navigate("/browse");
  };

  return (
    <>
      <div className="flex px-2 md:px-10 bg-black justify-between">
        <a href="/">
          <img className="w-44 mx-auto md:mx-0" src={Logo} alt="netflix_logo" />
        </a>
        <button
          className="px-2 m-4 mb-5 bg-purple-700 rounded-md text-white hover:bg-purple-600"
          onClick={handleBackClick}
        >
          ↩ Back
        </button>
      </div>
      <div className="bg-black bg-opacity-90">
        <div className="">
          <iframe
            className="w-full aspect-video"
            // width="860"
            // height="530"
            src={"https://www.youtube.com/embed/" + videoKey + "?&autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <div className="p-2 mt-1 flex">
          <img
            className="w-36 h-40 md:w-52 md:h-[40%] mr-4 border-2 border-pink-600 rounded-md"
            alt={title}
            src={POSTER_CDN_URL + posterPath}
          />
          <div className="text-white mt-1">
            <h1 className="text-2xl font-semibold mb-3">Movie: {title}</h1>
            <p className="text-lg mb-2 w-3/4 hidden md:block">
              <span className="font-semibold">Description:</span> {description}
            </p>
            <h1 className="text-lg mb-2">
              <span className="font-semibold">Realease Date:</span>{" "}
              {releaseDate}
            </h1>
            <h1 className="text-lg mb-2">
              <span className="font-semibold">IMDb Rating:</span>{" "}
              {rating.toFixed(1)} ⭐
            </h1>
          </div>
        </div>
        <div className="md:hidden">
          <p className="text-lg px-2 pb-[34px] text-white">
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowMovieTrailer;
