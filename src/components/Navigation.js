import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp, IoPersonSharp } from "react-icons/io5";

const Navigation = ({ userObj }) => {
  return (
    <nav className="w-full h-28 flex justify-center items-center">
      <ul className="mr-10 h-full flex items-center">
        <Link
          to="/"
          className="h-2/3 flex flex-col justify-evenly items-center"
        >
          <IoHomeSharp className="text-2xl text-blue-500" />
          <h3 className="text-white">Home</h3>
        </Link>
      </ul>
      <ul className="h-full flex items-center">
        <Link
          to="/profile"
          className="h-2/3 flex flex-col justify-evenly items-center"
        >
          <IoPersonSharp className="text-2xl text-blue-500" />
          <h3 className="text-white">{userObj.displayName}</h3>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
