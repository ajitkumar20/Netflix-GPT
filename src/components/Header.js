import React from "react";
import Logo from "../assets/images/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute px-10 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={Logo} alt="netflix_logo" />
    </div>
  );
};

export default Header;
