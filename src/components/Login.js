import React, { useState } from "react";
import netbg from "../assets/images/netflix_bg.jpg";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netbg} alt="netflixbg" />
      </div>
      <form className="absolute p-10 bg-black w-3/12 my-32 mx-auto left-0 right-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-3 my-3 w-full rounded-sm bg-gray-700"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          className="p-3 my-3 w-full rounded-sm bg-gray-700"
          placeholder="Email or mobile number"
          type="text"
        />
        <input
          className="p-3 my-3 w-full rounded-sm bg-gray-700"
          placeholder={isSignInForm ? "Password" : "Create a password"}
          type="password"
        />
        <button className="p-2 my-3 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
