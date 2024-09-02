import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="w-1/3 py-6 text-lg">{overview}</p>
      <div>
        <button className="rounded-md font-[600] text-lg bg-white text-black px-8 py-2 hover:bg-gray-400">
          ▶ Play
        </button>
        <button className="ml-4 rounded-md font-medium bg-gray-600 text-white px-8 py-2 hover:bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
