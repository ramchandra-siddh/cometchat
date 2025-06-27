import React from "react";
import { pictures } from "../assets/pic";
const Pictures = () => {
  return (
    <div
      className="flex gap-10 p-4 justify-around items-center relative w-full overflow-hidden bg-gradient-to-br from-[#24243a] via-[#1e1e40] to-[#312e3c]
   text-white font-sans"
    >
      {/* bg-gradient-to-br from-[#0B0C2A] via-[#1B1D4D] to-[#231A33] */}
      {pictures.map((picture) => (
        <img
          key={picture.id}
          src={picture.src}
          className="max-w-full h-3 object-contain m-2"
        />
      ))}
    </div>
  );
};

export default Pictures;
