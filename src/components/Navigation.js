import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav className="w-full h-20 flex justify-center items-center">
      <ul className="mr-10">
        <Link to="/">
          <IoHome className="text-2xl text-blue-500" />
        </Link>
      </ul>
      <ul>
        <Link to="/profile">
          <AiOutlineUser className="text-3xl text-blue-500" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
