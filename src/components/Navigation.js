import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const Navigation = ({ userObj }) => {
  return (
    <nav className="w-full h-40 flex justify-center items-center">
      <ul className="mr-10">
        <Link to="/" className="h-15 flex flex-col justify-center items-center">
          <IoHome className="text-2xl text-blue-500" />
          <h3 className="text-white">Home</h3>
        </Link>
      </ul>
      <ul>
        <Link
          to="/profile"
          className="h-15 flex flex-col justify-center items-center"
        >
          <AiOutlineUser className="text-3xl text-blue-500" />
          <h3 className="text-white">{userObj.displayName}</h3>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
