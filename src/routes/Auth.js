import React, { useState } from "react";
import { toast } from "react-toastify";
import { authService, firebaseInstance } from "../fbase";
import useInput from "../hooks/useInput";
import { GoMarkGithub } from "react-icons/go";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  const email = useInput("");
  const password = useInput("");
  const [newAccount, setNewAccount] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
      } else {
        await authService.signInWithEmailAndPassword(
          email.value,
          password.value
        );
      }
    } catch ({ message }) {
      toast.error(message);
    }
  };
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
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="font-semibold text-4xl mb-4 text-center">
          Log In to Nwitter
        </h1>
        <div className="py-9 px-10 shadow sm:rounded-lg sm-px-10">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="label text-white">Email</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="email"
                  value={email.value}
                  onChange={email.onChange}
                  required
                  className="input"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="label text-white">Password</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="password"
                  value={password.value}
                  onChange={password.onChange}
                  required
                  className="input"
                />
              </div>
            </div>
            <input
              type="submit"
              value={newAccount ? "Create Accont" : "Log In"}
              className="button border-blue-600 bg-blue-600 hover:bg-blue-700 w-full mt-4"
            />
          </form>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-10  flex w-full items-center">
            <div className="flex-1 border-t-2 border-gray-200"></div>
            <span className="text-sm uppercase mx-5 font-medium text-gray-600">
              Or
            </span>
            <div className="flex-1 border-t-2 border-gray-200"></div>
          </div>
          <button
            name="google"
            onClick={onSocialClick}
            className="button border-red-400 bg-red-400 hover:bg-red-500 mb-4 w-80 flex items-center justify-center"
          >
            <FaGoogle className="mr-3" />
            Continue with Google
          </button>
          <button
            name="github"
            onClick={onSocialClick}
            className="button border-gray-600 bg-gray-600 hover:bg-gray-700 w-80 flex items-center justify-center"
          >
            <GoMarkGithub className="mr-3" />
            Continue with Github
          </button>
          <button
            onClick={() => {
              setNewAccount(!newAccount);
            }}
            className="text-blue-500 p-2 focus:outline-none mt-3 mb-3"
          >
            {newAccount ? "Do you have an Account?" : "Don't have an account?"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
