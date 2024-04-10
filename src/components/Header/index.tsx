
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <>
      <div className=" py-5 max-sm:hidden">
        <div className="flex justify-between mx-5">
          <ul>
            <li className="px-3">asdfasdf</li>
          </ul>
          <ul className="flex">
            <li className="mx-3">
              <Link to={"/home"}>HOME</Link>
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
      <div className="sm:text-center sm:hidden sm:border ">
        <RxHamburgerMenu className="text-4xl mx-3 mt-2 border-2 p-1 rounded hover:bg-gray-200"/>
      </div>
    </>
  );
}

export default Header;
