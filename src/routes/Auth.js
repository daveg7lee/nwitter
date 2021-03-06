import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import SocialLogIn from "../components/SocialLogIn";

const Auth = () => {
  const [newAccount, setNewAccount] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="font-semibold text-4xl mt-6 text-center text-white">
          Log In to Nwitter
        </h1>
        <div className="py-9 px-0 shadow sm:px-10">
          <AuthForm newAccount={newAccount} />
        </div>
        <div className="flex flex-col items-center">
          <div className="my-10  flex w-full items-center">
            <div className="flex-1 border-t-2 border-gray-200"></div>
            <span className="text-sm uppercase mx-5 font-medium text-gray-600">
              Or
            </span>
            <div className="flex-1 border-t-2 border-gray-200"></div>
          </div>
          <SocialLogIn />
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
