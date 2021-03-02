import React from "react";
import useInput from "../hooks/useInput";

const Auth = () => {
  const email = useInput("");
  const password = useInput("");
  console.log(email.value, password.value);
  return (
    <div>
      <form>
        <input
          type="text"
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
        <input type="submit" value="Log In" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
