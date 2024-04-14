// FarziCarousal.jsx
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function FarziCarousal() {
    const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-33 bg-slate-900 text-white rounded flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${val==false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1712939706455-aa727970e5d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${val==false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1712174426543-eb917dbd7e5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span onClick={()=>setVal(()=>!val)} className="w-10 h-10 bg-[#dadada7b] flex items-center justify-center absolute bottom-[40%] left-[40%] text-black rounded-full">
        <FaArrowRight size={"1em"} />
        </span>
      </div>
    </div>
  );
}

export default FarziCarousal;
