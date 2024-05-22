import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ArolaPDF from "../../assets/Arola, Mohammad Jul Hafiz Resume.pdf"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <div className="flex  justify-center items-center sm:py-8">
          <div className=" max-sm:hidden ">
          <div className="flex justify-between mx-5 text-white/80  md:w-[700px] xl:w-[800px]">
            <ul>
              <li className="px-3 hover:text-white/100"><Link to={"/"} className="hover:text-white/100 font-bold font-mono text-xl">JULS</Link></li>
            </ul>
            <ul className="flex">
              <li className="mx-4">
                <Link to={"/project"} className="hover:text-white/100">PROJECT</Link>
              </li>
              <li >
                <a href={ArolaPDF} download className="border px-2 rounded-full pointer-events-auto hover:text-white/100">
                  Download CV
                </a>

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
        <div className="max-sm:h-full max-sm:w-64 max-sm:bg-neutral-800  max-sm:relative max-sm:top-[0px] max-sm:left-0 " onClick={(event) => event.stopPropagation()}>
          <div className="flex justify-end">
            <button className="sm:absolute sm:hidden" onClick={toggle}>
              <IoCloseSharp className="text-4xl mx-3 mt-2 p-1 rounded text-white/70 hover:text-neutral-800 hover:bg-gray-200"/>
            </button>
          </div>
          <div className="sm:hidden">
            <ul className="absolute top-[250px] left-10 text-center">
              <li className="mx-3 mb-8 border-2 px-4 rounded-full py-1">
                <Link to={"/"} className="text-white/70">HOME</Link>
              </li>
              <li className="mx-3 mb-8 border-2 px-4 rounded-full py-1">
                <Link to={"/project"} className="text-white/70">PROJECT</Link>
              </li>
              <li >
                <a href={ArolaPDF} download className="mx-3 mb-3 border-2 px-4 rounded-full py-1 text-white/70">
                  Download CV
                </a>
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
