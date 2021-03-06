import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import useInput from "../hooks/useInput";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../fbase";
import { FaTimes } from "react-icons/fa";

const NweetFactory = ({ userObj }) => {
  const nweet = useInput("");
  const [preview, setPreview] = useState("");
  const onSubmit = async (e) => {
    nweet.setValue("");
    setPreview("");
    e.preventDefault();
    let fileURL = "";
    if (preview) {
      const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await fileRef.putString(preview, "data_url");
      fileURL = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: nweet.value,
      createdAt: Date.now(),
      creatorID: userObj.uid,
      fileURL,
    };
    await dbService.collection("nweets").add(nweetObj);
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
  const clearPreview = () => setPreview("");
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center mb-4"
    >
      <div className="w-full flex items-center justify-center mb-4">
        <div className="relative rounded-md shadow-sm w-80 flex">
          <input
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            className="input"
            value={nweet.value}
            onChange={nweet.onChange}
          />
          <input
            type="submit"
            value="Nweet"
            className="absolute right-0 h-full rounded-r border-blue-600 bg-blue-600 hover:bg-blue-500 w-1/5 text-white cursor-pointer"
          />
        </div>
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
      {preview && (
        <div className="w-40 h-40 flex flex-col justify-center items-center my-5">
          <img src={preview} className="rounded-md mb-2" alt="Error"></img>
          <button
            onClick={clearPreview}
            className="text-blue-500 flex items-center"
          >
            Remove <FaTimes className="text-lg" />
          </button>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
