import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService, dbService } from "../fbase";

const Profile = ({ userObj }) => {
  const history = useHistory();
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
  return (
    <div className="min-h-screen">
      <button onClick={onLogOutClick} className="text-white">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
