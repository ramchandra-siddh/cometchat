import React from "react";

const GetStarted = () => {
  return (
    <div>
      <div className="relative w-full h-80 flex items-center justify-center bg-[rgb(11,12,28)] overflow-hidden text-white font-sans">
        {/* <!-- Background Glows --> */}
        <div
          className="absolute top-[-90px] left-[-100px] w-[200px] h-[200px] bg-gradient-to-br from-[#d65cb6] via-[#825e9e] to-[#f68d1d] 
        rounded-full shadow-[0_0_80px_30px_#a46293]"
        ></div>

        <div
          className="absolute bottom-[10px] right-[100px] w-[70px] h-[70px] bg-gradient-to-tr from-[#631576] via-[#db873d] to-[#e58a22] 
        rounded-full shadow-[0_0_50px_15px_#db873d]"
        ></div>

        {/* <!-- Optional star field --> */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-100 pointer-events-none"></div>

        {/* <!-- Main Content --> */}
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl font-semibold mb-4">Get started for free</h1>
          <p className="text-lg text-gray-300 mb-6">
            Build and test for as long as you need. <br />
            Pick a plan when you're ready.
          </p>
          <div className="flex justify-center gap-4">
            <button className=" text-white px-5 py-2 rounded-md font-medium hover:bg-gray-300 hover:text-black transition opacity-90 cursor-pointer">
              Start free trial
            </button>
            <button className="bg-[#7F5EFF] text-white px-5 py-2 rounded-md font-medium hover:bg-[#6f4df3] transition cursor-pointer">
              Schedule a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
