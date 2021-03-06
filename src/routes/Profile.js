import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { authService, dbService } from "../fbase";
import useInput from "../hooks/useInput";

const Profile = ({ refreshUser, userObj }) => {
  const [nweets, setNweets] = useState([]);
  const history = useHistory();
  const displayName = useInput(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyNeetws = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorID", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    setNweets(nweets);
  };
  useEffect(() => {
    getMyNeetws();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== displayName.value) {
      await userObj.updateProfile({ displayName: displayName.value });
      toast.success("Profile Updated");
      refreshUser();
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center">
      <form onSubmit={onSubmit} className="w-5/6 md:w-1/4">
        <div className="rounded-md shadow-sm flex relative">
          <input
            type="text"
            value={displayName.value}
            onChange={displayName.onChange}
            className="input"
            maxLength={40}
            placeholder="Name"
          />
          <input
            type="submit"
            value="Update"
            className="px-2 absolute right-0 h-full rounded-r-md bg-blue-600 border-blue-600 hover:bg-blue-500 text-white cursor-pointer"
          />
        </div>
      </form>
      <div className="my-10 flex w-5/6 md:w-1/4 items-center"></div>
      <div className="w-1/4 flex justify-center">
        <button
          onClick={onLogOutClick}
          className="button bg-red-600 border-red-600 hover:bg-red-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
