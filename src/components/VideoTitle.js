const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[17%] px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-3 w-1/3 text-lg font-medium">{overview}</p>
      <div>
        <button className="mr-1 bg-white text-black p-2 px-6 text-lg rounded-md hover:bg-opacity-80">
          ► Play
        </button>
        <button className="ml-1 bg-gray-500 text-white p-2 px-6 text-lg rounded-md bg-opacity-50">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
