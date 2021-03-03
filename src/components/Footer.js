import React from "react";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex justify-center items-center">
      <footer className="text-blue-500">
        <IoLogoTwitter className="text-4xl" />
      </footer>
    </div>
  );
};

export default Footer;
