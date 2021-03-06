import React from "react";
import { toast } from "react-toastify";
import { authService } from "../fbase";
import useInput from "../hooks/useInput";

const AuthForm = ({ newAccount }) => {
  const email = useInput("");
  const password = useInput("");
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
  return (
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
        className="button border-blue-600 bg-blue-600 hover:bg-blue-500 w-full mt-4"
      />
    </form>
  );
};

export default AuthForm;
