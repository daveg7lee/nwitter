import React from "react";
import useInput from "../hooks/useInput";

const Home = () => {
  const nweet = useInput("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mt-1 rounded-md shadow-sm w-80">
          <input
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            className="input"
            value={nweet.value}
            onChange={nweet.onChange}
          />
        </div>
        <input type="submit" value="Nweet" className="button" />
      </form>
    </div>
  );
};

export default Home;
