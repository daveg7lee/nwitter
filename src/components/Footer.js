import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex justify-center items-center">
      <footer className="text-gray-500">
        &copy; Nwitter {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Footer;
