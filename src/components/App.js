import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { authService } from "../fbase";
import Load from "./Load";
import AppRouter from "./Router";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        <Load />
      )}
      <ToastContainer hideProgressBar={true} draggable pauseOnHover />
    </>
  );
};

export default App;
