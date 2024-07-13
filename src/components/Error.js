import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleErrorClick = () => {
    navigate("/browse");
  };

  return (
    <div className="bg-black bg-opacity-70 text-white w-[65%] mt-10 p-5 mx-auto left-0 right-0 text-center">
      <h1 className="text-xl">Something went wrong...</h1>
      <h1 className="text-lg">
        This is a bug and currently I am working on it. Please go back choose a
        movie to see video.
      </h1>
      <button
        className="py-2 px-3 bg-slate-500 font-semibold rounded-md mt-3 hover:bg-slate-400"
        onClick={handleErrorClick}
      >
        ↩ Back
      </button>
    </div>
  );
};

export default Error;
