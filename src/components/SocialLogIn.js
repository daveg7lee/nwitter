import React from "react";
import { toast } from "react-toastify";
import { authService, firebaseInstance } from "../fbase";
import { GoMarkGithub } from "react-icons/go";
import { FaGoogle } from "react-icons/fa";

const SocialLogIn = () => {
  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    try {
      let provider;
      if (name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === "github") {
        provider = new firebaseInstance.auth.GithubAuthProvider();
      }
      await authService.signInWithPopup(provider);
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <>
      <button
        name="google"
        onClick={onSocialClick}
        className="button border-red-500 bg-red-500 hover:bg-red-400 mb-4 w-80 flex items-center justify-center"
      >
        <FaGoogle className="mr-3" />
        Continue with Google
      </button>
      <button
        name="github"
        onClick={onSocialClick}
        className="button border-gray-600 bg-gray-600 hover:bg-gray-500 w-80 flex items-center justify-center"
      >
        <GoMarkGithub className="mr-3" />
        Continue with Github
      </button>
    </>
  );
};

export default SocialLogIn;
