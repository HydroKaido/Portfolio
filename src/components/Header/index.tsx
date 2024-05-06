import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <div className="flex  justify-center items-center sm:py-8">
          <div className=" max-sm:hidden ">
          <div className="flex justify-between mx-5 text-white/90 md:w-[750px] xl:w-[800px]">
            <ul>
              <li className="px-3">asdfasdf</li>
            </ul>
            <ul className="flex">
              <li className="mx-3">
                <Link to={"/"}>HOME</Link>
              </li>
              <li className="mx-3">
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li className="mx-3">
                <Link to={"/project"}>PROJECT</Link>
              </li>
            </ul>
            <ul className="flex">
              <li className="border px-3 rounded-full ">
                Download CV
              </li>
            </ul>
          </div>
        </div>
      
        
      </div>
      <div >
        <button className="sm:text-center sm:hidden sm:border " onClick={toggle}>
          <RxHamburgerMenu className="text-[40px] mx-3 mt-2 px-1 rounded text-white/90"/>
        </button>
      </div>
      <div>
      {isOpen && 
      <aside className="max-sm:fixed max-sm:bg-black max-sm:bg-opacity-60 max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:bottom-0 max-sm:z-40 max-sm:h-screen " onClick={toggle}>
        <div className="max-sm:h-full max-sm:w-64 max-sm:bg-gray-50 max-sm:border max-sm:relative max-sm:top-[0px] max-sm:left-0 " onClick={(event) => event.stopPropagation()}>
          <div className="flex justify-end">
            <button className="sm:absolute sm:hidden" onClick={toggle}>
              <IoCloseSharp className="text-4xl mx-3 mt-2 p-1 rounded hover:bg-gray-200"/>
            </button>
          </div>
          <div className="sm:hidden">
            <ul className="flex flex-col items-center">
              <li className="px-3 text-center mb-10">
                HYDROTOLERANCE
              </li>
            </ul>
            <ul className="absolute top-[250px] left-7 text-center">
              <li className="mx-3 mb-3 border-2 px-4">
                <Link to={"/home"}>HOME</Link>
              </li>
              <li className="mx-3 mb-3 border-2 px-4">
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li className="mx-3 mb-3 border-2 px-4">
                <Link to={"/project"}>PROJECT</Link>
              </li>
              <li className="mx-3 mb-3 border-2 px-4">
                Download CV
              </li>
            </ul>
          </div>
          </div>

      </aside>
      }
      </div>
    </>
  );
}

export default Header;
