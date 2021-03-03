import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import useInput from "../hooks/useInput";

const Home = () => {
  const nweet = useInput("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const data = await dbService.collection("nweets").get();
    data.forEach((document) => {
      const nweetObj = {
        ...document.data(),
        id: document.id,
      };
      setNweets((prev) => [nweetObj, ...prev]);
    });
  };
  useEffect(() => {
    getNweets();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService
      .collection("nweets")
      .add({ nweet: nweet.value, createdAt: Date.now() });
    nweet.setValue("");
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="flex justify-center items-center">
        <div className="rounded-md shadow-sm w-80 mr-2">
          <input
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            className="input"
            value={nweet.value}
            onChange={nweet.onChange}
          />
        </div>
        <input
          type="submit"
          value="Nweet"
          className="button border-blue-600 bg-blue-600 hover:bg-blue-500"
        />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
