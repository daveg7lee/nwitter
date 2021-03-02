import React, { useState } from "react";
import { authService } from "../fbase";
import AppRouter from "./Router";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  console.log(isLoggedIn);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
