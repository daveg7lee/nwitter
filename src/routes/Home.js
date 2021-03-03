import React, { useEffect, useState } from "react";
import Nweet from "../components/Nweet";
import { dbService } from "../fbase";
import useInput from "../hooks/useInput";

const Home = ({ userObj }) => {
  const nweet = useInput("");
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("nweets").add({
      text: nweet.value,
      createdAt: Date.now(),
      creatorID: userObj.uid,
    });
    nweet.setValue("");
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex justify-center items-center mb-4"
      >
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
      <div className="w-full h-full flex flex-col justify-center items-center">
        {nweets.map((nweet) => (
          <Nweet
            nweet={nweet}
            key={nweet.id}
            isOwner={nweet.creatorID === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
