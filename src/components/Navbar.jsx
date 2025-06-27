import React, { useState } from "react";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.png";
import "../App.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#0B0C2A] via-[#1B1D4D] to-[#231A33] text-white font-sans">
      {/* ---------- Navbar ---------- */}
      <nav className="flex justify-between items-center h-16 px-5 z-50 relative">
        <h1 className="text-xl font-semibold">
          comet<span className="font-bold">chat</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
          <li className="cursor-pointer">Platform</li>
          <li className="cursor-pointer">Solutions</li>
          <li className="cursor-pointer">Developers</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>

        <div className="flex gap-4 items-center">
          <button className="block md:block text-sm cursor-pointer">
            Log in
          </button>
          <button className="hidden md:block h-9 rounded-lg px-4 bg-[#A18AFF] hover:bg-[#7b63f3] text-sm transition cursor-pointer">
            Schedule a demo
          </button>
          {/* Mobile Menu Icon */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden cursor-pointer"
            src={menu_icon}
            alt="menu"
          />
        </div>
      </nav>

      {/* ---------- Mobile Menu Overlay ---------- */}
      {showMenu && (
        <div className="fixed inset-0 bg-[#1B1D4D] z-50 flex flex-col items-center p-6">
          <div className="flex justify-between items-center w-full mb-10">
            <h1 className="text-xl font-semibold">
              comet<span className="font-bold">chat</span>
            </h1>
            <img
              className="w-6 cursor-pointer"
              src={cross_icon}
              alt="close"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-6 text-lg font-medium">
            <li onClick={() => setShowMenu(false)} className="cursor-pointer">
              Platform
            </li>
            <li onClick={() => setShowMenu(false)} className="cursor-pointer">
              Solutions
            </li>
            <li onClick={() => setShowMenu(false)} className="cursor-pointer">
              Developers
            </li>
            <li onClick={() => setShowMenu(false)} className="cursor-pointer">
              Resources
            </li>
            <li onClick={() => setShowMenu(false)} className="cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>
      )}

      {/* ---------- Glowing Bubbles ---------- */}
      <div className="absolute top-[150px] left-[100px] w-10 h-10 bg-gradient-to-br from-[#1a1a1a] to-[#5a5757] rounded-full shadow-[0_0_50px_#ff9ecb]"></div>
      <div className="absolute top-[335px] left-[-40px] w-20 h-20 bg-gradient-to-br from-white via-[#ffc0cb] to-[#e290b9] rounded-full shadow-[0_0_50px_#ff9ecb]"></div>
      <div className="absolute top-[467px] left-[168px] w-32 h-32 bg-gradient-to-br from-[#f39966] via-[#7a3d2a] to-black rounded-full opacity-80 shadow-[0_0_60px_#f39966]"></div>
      <div className="absolute top-[478px] left-[694px] w-20 h-20 bg-gradient-to-br from-[#997ba4] via-[#ebd7f1] to-[#b691e4] rounded-full opacity-30"></div>
      <div className="absolute bottom-[10%] right-[-120px] w-64 h-64 bg-gradient-to-b from-[#eb9366] to-[#3a312e] rounded-full shadow-[-20px_-20px_60px_#bd8061]"></div>

      {/* ---------- Content Section ---------- */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-around items-center h-full px-10  lg:px-40">
        {/* Left Text Section */}
        <div className="max-w-xl mb-10 lg:mb-0 text-center lg:text-left lg:-mt-48 lg:-ml-40 ">
          <h1 className="text-4xl font-bold">Join the CometChat</h1>
          <h2 className="text-4xl font-bold">partner universe</h2>
          <p className="text-lg text-gray-300 opacity-75 leading-relaxed mt-4">
            Create value for your clients, leveraging our <br />
            world-class technology. Partner with us and <br /> grow your
            business!
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 w-full max-w-lg text-white shadow-xl lg:-ml-4 -mt-40">
          <h2 className="text-xl font-semibold mb-6">Become a partner</h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm mb-1 font-medium text-white"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Type your name here..."
                className="w-full p-3 rounded-2xl bg-white/5 placeholder-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <label
                className="block text-sm mb-1 font-medium text-white"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full p-3 rounded-2xl bg-white/5 placeholder-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1 font-medium text-white"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Type your Company's  name"
                className="w-full p-3 rounded-2xl bg-white/5 placeholder-gray-300 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#A18AFF] hover:bg-[#7b63f3] text-white font-semibold py-3 rounded-lg transition"
            >
              Submit application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
