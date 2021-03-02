import React, { useState } from "react";
import { toast } from "react-toastify";
import { authService, firebaseInstance } from "../fbase";
import useInput from "../hooks/useInput";

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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
          required
        />
        <input type="submit" value={newAccount ? "Create Accont" : "Log In"} />
      </form>
      <button
        onClick={() => {
          setNewAccount(!newAccount);
        }}
      >
        {newAccount ? "Do you have an Account?" : "Don't have an account?"}
      </button>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
