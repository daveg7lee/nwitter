import React from "react";
import { IoTrashOutline, IoPencilSharp } from "react-icons/io5";

const Nweet = ({ nweet, isOwner }) => {
  return (
    <div className="h-10 flex justify-center items-center bg-white shadow rounded-full py-6 px-4 my-1.5">
      <h4 className="mr-2">{nweet.text}</h4>
      <div className="flex items-center">
        {isOwner && (
          <>
            <button className="mr-1 focus:outline-none">
              <IoTrashOutline />
            </button>
            <button className="focus:outline-none">
              <IoPencilSharp />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Nweet;
