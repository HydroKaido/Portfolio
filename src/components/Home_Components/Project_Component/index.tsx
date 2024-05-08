import Zephyderm from "../../../assets/Zephyderm Design.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProjectComponent() {
  return (
    <>
      <div className="flex justify-center items-center mb-3 mx-5 mt-10">
        <div className="md:w-[750px] xl:w-[800px]">
          <div className="mb-3 font-bold text-white/90 font-mono text-xl tracking-wide ">PROJECT</div>
          <div className="gap-x-10 md:gap-y-5 grid sm:grid-cols-2">
            <div className="card relative rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5 shadow-xl hover:shadow-rose-500/10">
              <div className="rounded-lg overflow-hidden">
                <img src={Zephyderm} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Zephyderm: Appointment System and Client Monitoring</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70 mb-12">
                  Zephyderm is a capstone project that created by 4 members and Im the lead programmer for this project i used a technology for it are <span className="text-white/90 font-bold">HTML, CSS, BOOTSTRAP 5, PHP, MYSQL and JQuery</span> 
                </div>
              </div>
              <div className="bottom-8 right-0 left-0">
                <div className="grid grid-cols-2 text-center mt-5">
                  <div>
                    <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1 ">
                      Live Demo
                    </a>
                  </div>
                  <div>
                    <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card relative rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5  shadow-xl hover:shadow-rose-500/10">
              <div className="rounded-lg overflow-hidden">
                <img src={Zephyderm} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Pokemon PokeDex</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70 mb-12">
                  This is a personal project created using React, Tailwind for styling, and the PokéAPI.
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0">
                <div className="grid grid-cols-2 text-center mt-5">
                  <div>
                    <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1">
                      Live Demo
                    </a>
                  </div>
                  <div>
                    <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card relative rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5  shadow-xl hover:shadow-rose-500/10">
              <div className="rounded-lg overflow-hidden">
                <img src={Zephyderm} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Kali: The Darkness Arrive</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70 mb-12">
                  This is a group project for game development created using the 
                  Unity game engine, with C# as the scripting language.
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0">
                <div className="grid grid-cols-2 text-center mt-5">
                  <div>
                    <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1">
                      Live Demo
                    </a>
                  </div>
                  <div>
                    <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card relative  rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5  shadow-xl hover:shadow-rose-500/10">
              <div className="rounded-lg overflow-hidden">
                <img src={Zephyderm} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Naval Conquest</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70 mb-12">
                  It's a multiplayer ping-pong game created using the Unity game engine, with C# as the scripting language, and Firebase for the backend.
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0">
                <div className="grid grid-cols-2 text-center mt-5">
                  <div>
                    <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1">
                      Live Demo
                    </a>
                  </div>
                  <div>
                    <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link
          to={"/project"}
          className="flex justify-center mb-5 group hover:text-blue-500 text-white/90"
        >
          <label>View More Project </label>
          <FaArrowLeft className="my-auto ms-3 group-hover:rotate-180 transition-transform transform" />
        </Link>
      </div>
    </>
  );
}

export default ProjectComponent;
