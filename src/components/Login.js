import userAvatar from "../assets/images/netflix-profile-pictures.jpg";
import { useState, useRef } from "react";
import netbg from "../assets/images/netflix_bg.jpg";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //Sign in | Sign up
    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userAvatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          className="h-screen object-cover md:h-full"
          src={netbg}
          alt="netflixbg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[95%] absolute p-10 bg-black md:w-3/12 my-32 md:my-24 mx-auto left-0 right-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-2xl md:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 my-3 w-full rounded-sm bg-gray-700"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="p-3 my-3 w-full rounded-sm bg-gray-700"
          placeholder="Email"
          type="text"
        />
        <input
          ref={password}
          className="p-3 my-3 w-full rounded-sm bg-gray-700"
          placeholder={isSignInForm ? "Password" : "Create a password"}
          type="password"
        />
        <p className="text-red-600 font-medium text-md my-2">{errorMessage}</p>
        <button
          className="p-2 my-3 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 my-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
