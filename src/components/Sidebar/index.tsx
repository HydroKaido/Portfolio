import ProfileImage from "../../assets/profile.jpg";
import ScrollSpy from "react-scrollspy-navigation";
import {
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
  FaCertificate,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Sidebar() {
  return (
    <>
      <div
        className="fixed w-72 h-screen max-lg:hidden z-50 bg-[#19171c]"
        id="scrollspy-scrollable-parent-2"
      >
        <div className=" flex flex-col justify-center items-center h-[90vh]">
          <div className="flex justify-center items-center flex-col">
            <img
              src={ProfileImage}
              alt=""
              className="w-40 h-40 rounded-full mb-8"
            />
          </div>
          <div className=" space-y-6 text-white/90">
            <div className="fontTitle ">
              <p className="text-xl font-bold">MOHAMMAD AROLA</p>
              <p className="flex items-center ">
                <MdEmail className="me-2" /> juls.arola@gmail.com
              </p>
            </div>
            <ScrollSpy activeClass="nav-active">
              <div className="space-y-6">
                <a
                  href="#aboutMe"
                  className={`flex items-center hover:underline`}
                >
                  <FaUser className="mr-2" />
                  ABOUT
                </a>
                <a
                  href="#experience"
                  className={`flex items-center  hover:underline`}
                >
                  <FaBriefcase className="mr-2" />
                  EXPERIENCE
                </a>
                <a
                  href="#project"
                  className={`flex items-center  hover:underline`}
                >
                  <FaProjectDiagram className={`mr-2`} />
                  PROJECTS
                </a>
                <a
                  href="#skills"
                  className={`flex items-center  hover:underline`}
                >
                  <FaCode className="mr-2" />
                  SKILLS
                </a>
                <a
                  href="#certifications"
                  className={`flex items-center  hover:underline`}
                >
                  <FaCertificate className="mr-2" />
                  CERTIFICATIONS
                </a>
              </div>
            </ScrollSpy>
            <div className=" flex space-x-3 mb-14 text-white/90">
              <a
                href="https://github.com/HydroKaido"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-lg  rounded-full h-10 w-10 hover:bg-blue-500 transition duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/juls-arola/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-lg  rounded-full h-10 w-10 hover:bg-blue-500  transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/hydrokaido/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-lg  rounded-full h-10 w-10 hover:bg-blue-500  transition duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white/90 fixed z-50 top-0 p-4 ">
        <input type="checkbox" id="checkMenu" className="hidden peer" />
        <label htmlFor="checkMenu" className="lg:hidden ">
          <IoMdMenu className="cursor-pointer text-[35px] text-white rounded-full p-2 bg-blue-600 shadow-lg shadow-blue-500/50" />
        </label>

        <label className="h-screen bg-[#18162E] w-72  fixed z-50 -left-full transition-all duration-500 top-0 peer-checked:left-0 md:hidden">
          <div className=""></div>
          <div className="relative h-screen ">
            <label
              htmlFor="checkMenu"
              className="absolute rotate-90 flex justify-center left-[300px] top-1/2 -translate-x-1/2 -translate-y-1/2  px-4 before:absolute before:mt-3 cursor-pointer before:content-['Close']  border-b-[50px] border-r-[50px] border-l-[50px] border-r-transparent border-l-transparent border-[#18162E]"
            ></label>

            <div className=" flex flex-col justify-center items-center h-[90vh] space-y-6 text-white/90">
              <div className="flex justify-center items-center flex-col">
                <img
                  src={ProfileImage}
                  alt=""
                  className=" w-32 h-32 rounded-full"
                />
              </div>
              <div>
                <div className="fontTitle mb-5">
                  <p className="text-xl font-bold">MOHAMMAD AROLA</p>
                  <p className="flex items-center ">
                    <MdEmail className="me-2" /> juls.arola@gmail.com
                  </p>
                </div>
                <ScrollSpy activeClass="nav-active">
                  <div className="space-y-6">
                    <a
                      href="#aboutMe"
                      className={`flex items-center hover:underline`}
                    >
                      <FaUser className="mr-2" />
                      ABOUT
                    </a>
                    <a
                      href="#experience"
                      className={`flex items-center  hover:underline`}
                    >
                      <FaBriefcase className="mr-2" />
                      EXPERIENCE
                    </a>
                    <a
                      href="#project"
                      className={`flex items-center  hover:underline`}
                    >
                      <FaProjectDiagram className={`mr-2`} />
                      PROJECTS
                    </a>
                    <a
                      href="#skills"
                      className={`flex items-center  hover:underline`}
                    >
                      <FaCode className="mr-2" />
                      SKILLS
                    </a>
                    <a
                      href="#certifications"
                      className={`flex items-center  hover:underline`}
                    >
                      <FaCertificate className="mr-2" />
                      CERTIFICATIONS
                    </a>
                  </div>
                </ScrollSpy>
              </div>
            </div>
          </div>
        </label>
      </div>
      {/* Container */}
    </>
  );
}

export default Sidebar;
