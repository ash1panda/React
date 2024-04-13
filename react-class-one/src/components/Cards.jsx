import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-500">
      <div className="w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300 ">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=2696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="amazon"
          />
        </div>
        <div className="w-full px-3 py-4">
          <h1 className="font-semibold">Amazon Basics </h1>
          <p className="text-xs">
            Lo rem ipsum dolor sit amet consectetur adipisicing elit. Hic, odit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
