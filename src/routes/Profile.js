import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <div className="h-screen">
      <button onClick={onLogOutClick} className="text-white">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
