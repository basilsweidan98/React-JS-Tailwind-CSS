import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-full bg-white border drop-shadow-xl">
      <div className="h-full p-6">
        <div className="flex flex-col  mb-6">
          <legend className="uppercase text-slate-400	pb-2 text-xs">Overview </legend>
          <Link to="/" className="py-1"> Home </Link>
          <Link to="/MyProfile">My Profile</Link>
          <Link to="/Bookmarks" className="py-1"> Bookmarks </Link>
          <Link to="/Knowledge hub" className="py-1"> Knowledge hub </Link>
        </div>

        <div className="flex flex-col mb-6 ">
          <legend className="uppercase text-slate-400	pb-2  text-xs">Quick services </legend>
          <a href="#" className="py-1">M-Power</a>
          <a href="#" className="py-1"> Performance development </a>
          <a href="#" className="py-1"> Workplace </a>
          <a href="#" className="py-1"> Learning oppurtunities </a>
        </div>

        <hr className="border-b- border-indigo-500 pb-3" />

        <div className="flex flex-col mb-6 ">
          <legend className="uppercase text-slate-400	pb-2 text-xs"> Employee services </legend>
          <a href="#" className="py-1">Tools </a>
          <a href="#" className="py-1">  Automated forms  </a>
          <a href="#" className="py-1"> Templates</a>
        </div>

        <div className="flex flex-col  mb-6">
          <legend className="uppercase text-slate-400	pb-2 text-xs ">Tools & Templates</legend>
          <a href="#" className="py-1">Employee offers</a>
          <a href="#" className="py-1">Grow</a>
          <a href="#" className="py-1">Human capital business partners</a>
        </div>
        <hr className="border-b- border-indigo-500 pb-3" />

        <button id="dropdownButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center mb-3 dark:bg-blue-600 " type="button" > Our company{" "}
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center dark:bg-blue-600 " type="button" > Useful links{" "}
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
