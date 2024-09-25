import React from "react";

const NavBar = () => {
  return (
    <div className="fixed left-0 right-0 z-50 mx-auto flex w-screen justify-between bg-gray-50 p-4">
      <div className="text-2xl font-light">YourDigitalPlanner</div>

      {/** Navs */}
      <div className="flex gap-4 text-lg font-extralight">
        <button className="transition-transform duration-300 hover:scale-105">
          LOG IN
        </button>
        <button className="rounded-md bg-indigo-200 p-2 transition-colors transition-transform duration-300 hover:scale-105 hover:bg-indigo-300">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default NavBar;
