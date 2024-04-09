import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <>
      <div className="bg-red-500 text-white py-5 max-sm:hidden">
        <div className="flex justify-between mx-5">
          <ul>
            <li className="px-3">asdfasdf</li>
          </ul>
          <ul className="flex">
            <li className="mx-3">
              <Link to={"/home"}>Home</Link>
            </li>
            <li className="mx-3">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="mx-3">
              <Link to={"/project"}>Project</Link>
            </li>
          </ul>
          <ul className="flex">
            <li className="border px-3 rounded-full border-white">
              Download CV
            </li>
          </ul>
        </div>
        
      </div>
      <div className="sm:text-center sm:hidden sm:border ">
        <RxHamburgerMenu className="text-4xl mx-3 mt-2 border-2 p-1 rounded hover:bg-gray-200"/>
      </div>
    </>
  );
}

export default Header;
