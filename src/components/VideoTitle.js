import React from "react";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black py-2 md:py-4 px-2 text-xl rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
