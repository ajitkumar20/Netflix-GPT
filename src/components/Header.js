import Logo from "../assets/images/Netflix_Logo_PMS.png";
// import userIcon from "../assets/images/netflix-profile-pictures.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="flex absolute w-full px-10 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <a href="/">
        <img className="w-44" src={Logo} alt="netflix_logo" />
      </a>
      {user && (
        <div className="flex p-2">
          <img className="w-10 h-10" src={user?.photoURL} alt="user-icon" />
          <button
            onClick={handleSignOut}
            className="font-semibold hover:text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
