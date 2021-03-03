import React, { useState } from "react";
import {
  IoTrashOutline,
  IoPencilSharp,
  IoCloseOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { toast } from "react-toastify";
import { dbService } from "../fbase";
import useInput from "../hooks/useInput";

const Nweet = ({ nweet, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const newNweet = useInput(nweet.text);
  const onDeleteClick = async () => {
    try {
      const ok = window.confirm("Are you sure you want to delete this nweet?");
      if (ok) {
        await dbService.doc(`nweets/${nweet.id}`).delete();
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (e) => {
    e.preventDefault();
    toggleEditing();
    await dbService.doc(`nweets/${nweet.id}`).update({ text: newNweet.value });
  };
  return (
    <div className="h-10 flex justify-center items-center bg-white shadow rounded-full py-6 px-4 my-1.5">
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={newNweet.value}
              onChange={newNweet.onChange}
              required
            />
          </form>
          <button onClick={toggleEditing} className="focus:outline-none">
            <IoCloseOutline className="text-xl" />
          </button>
        </>
      ) : (
        <>
          <h4 className="mr-2">{nweet.text}</h4>
          <div className="flex items-center">
            {isOwner && (
              <>
                <button
                  onClick={onDeleteClick}
                  className="mr-1 focus:outline-none"
                >
                  <IoTrashOutline />
                </button>
                <button onClick={toggleEditing} className="focus:outline-none">
                  <IoPencilSharp />
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Nweet;
