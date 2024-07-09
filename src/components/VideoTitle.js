const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[17%] px-3 md:px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-5xl font-bold md:mb-0 mb-1">{title}</h1>
      <p className="hidden md:inline-block py-3 w-1/3 text-lg font-medium">
        {overview}
      </p>
      <div>
        <button className="mr-1 bg-white text-black py-1 px-2 md:py-2 md:px-6 text-base md:text-lg rounded-md hover:bg-opacity-80">
          ► Play
        </button>
        <button className="hidden md:inline-block ml-1 bg-gray-500 text-white p-2 px-6 text-lg rounded-md bg-opacity-50">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
