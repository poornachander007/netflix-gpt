import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="VideoTitle w-screen aspect-video pt-[15%] px-4 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-md md:text-5xl font-bold">{title}</h1>
      <p className="w-1/3 hidden md:block py-6 text-lg">{overview}</p>
      <div>
        <button className="rounded-sm md:rounded-md font-medium text-xs md:text-lg bg-white text-black px-1 py-1 md:px-8 md:py-2 hover:bg-gray-400">
          ▶ Play
        </button>
        <button className="hidden md:inline-block ml-4 rounded-md font-medium text-lg bg-gray-600 text-white px-8 py-2 hover:bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
