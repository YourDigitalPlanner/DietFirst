import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white px-4 py-16 text-center font-light md:py-32">
      <div className="text-4xl text-indigo-800 md:text-6xl">
        Welcome to Your Digital Planner
      </div>
      <div className="text-xl text-indigo-700 md:text-2xl">
        Your all-in-one hub for seamless organization and planning.
      </div>
      <button className="mt-4 rounded-md bg-indigo-300 px-6 py-3 text-lg font-semibold text-indigo-600 transition-all duration-300 hover:scale-105 hover:bg-indigo-400">
        TRY TODAY!
      </button>
    </div>
  );
};

export default Hero;
