import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { authService, dbService } from "../fbase";
import useInput from "../hooks/useInput";

const Profile = ({ refreshUser, userObj }) => {
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
    console.log(nweets.docs.map((doc) => console.log(doc.data())));
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
    <div className="min-h-screen">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={displayName.value}
          onChange={displayName.onChange}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick} className="text-white">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
