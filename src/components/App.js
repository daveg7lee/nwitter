import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { authService } from "../fbase";
import Load from "./Load";
import AppRouter from "./Router";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : <Load />}
      <ToastContainer hideProgressBar={true} draggable pauseOnHover />
    </>
  );
};

export default App;
