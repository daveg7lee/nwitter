import React, { useEffect, useState } from "react";
import Nweet from "../components/Nweet";
import { dbService } from "../fbase";
import useInput from "../hooks/useInput";
import { FaPlus } from "react-icons/fa";

const Home = ({ userObj }) => {
  const nweet = useInput("");
  const [nweets, setNweets] = useState([]);
  const [preview, setPreview] = useState("");
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
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const oneFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      setPreview(finishedEvent.target.result);
    };
    reader.readAsDataURL(oneFile);
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center mb-4"
      >
        <div className="flex items-center mb-4">
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
        </div>
        <div>
          <label
            htmlFor="file"
            className="cursor-pointer flex items-center text-sm text-blue-500"
          >
            Add Photos <FaPlus className="ml-1" />
          </label>
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={onFileChange}
          />
        </div>
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
