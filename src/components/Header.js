import Logo from "../assets/images/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSeachView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User sign in / sign up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSeachView());
  };

  return (
    <div className="flex absolute w-full px-10 bg-gradient-to-b from-black z-10 justify-between flex-col md:flex-row">
      <a href="/">
        <img className="w-44 mx-auto md:mx-0" src={Logo} alt="netflix_logo" />
      </a>
      {user && (
        <div className="flex justify-between">
          <button
            className="py-1 md:py-0 px-2 m-4 mb-5 rounded-md text-white bg-purple-800 hover:bg-purple-700"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "Search"}
          </button>
          <img
            className="hidden md:block w-10 h-10 rounded-md mt-3"
            src={user?.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-semibold hover:text-gray-300"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
