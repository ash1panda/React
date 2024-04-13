import React from "react";

function Music() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex justify-center items-center">
      <div className="w-50 h-50 px-2 py-2 bg-zinc-100 rounded-md flex">
        <div className="w-20 h-20 bg-sky-200">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://w0.peakpx.com/wallpaper/791/288/HD-wallpaper-arijit-singh-thumbnail.jpg"
            alt=""
          />
        </div>

        <div className="bg-pink-100 ml-2 block">
          <div>
            <p className="font-semibold text-2xl bg-pink-200">Aadat</p>
          </div>
          <div className="bg-pink-100 pr-5">
          <p className="font-semibold mt-0.5 text-sm">(Arijit Singh)</p>
          <p className="font-semibold mt-2 text-xs">Aadat movie (2002) </p>
          <p className="text-xs">
            Romantic song by laila to showcase her love for majnu
          </p>
          <button className="text-xs bg-red-300 px-1  rounded-full">
            Romantic
          </button>
          <button className="text-xs bg-red-300 ml-1 px-1 rounded-full">
            Lonliness
          </button>
          <button className="text-xs bg-red-300 ml-1 px-1  rounded-full">
            Love
          </button>
          </div>
          
          <div className="mt-2 bg-pink-100">
            <button className="bg-blue-500 px-2 py-1 rounded-full">Play Song</button>
            <button className="ml-2 bg-blue-500 px-2 py-1 rounded-full">Download</button>
            <button className="ml-2 bg-blue-500 px-2  py-1 rounded-full">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
