import Zephyderm from "../../../assets/Zephyderm Design.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import PokedexApi from "../../../assets/Pokemon-Pokedex.jpg"
import NavalConquest from "../../../assets/Naval Conquest.png"
import Kali from "../../../assets/Kali.png"

function ProjectComponent() {
  useEffect(() => {
    ScrollReveal().reveal('.all', 
    { 
      delay: 300,
     }),
    ScrollReveal().reveal('.headline', 
    { 
      delay: 200,
      interval: 200,
      duration: 1000,
     }),
     ScrollReveal().reveal('.headline1', 
    { 
      delay: 500,
      interval: 200,
      duration: 1000,
     })
     ScrollReveal().reveal('.headline2', 
    { 
      delay: 700,
      interval: 200,
      duration: 1000,
     })
     ScrollReveal().reveal('.headline3', 
    { 
      delay: 900,
      interval: 200,
      duration: 1000,
     })
    }, []);
  return (
    <>
      <div className="flex justify-center items-center mb-3 mx-5 mt-10 all">
        <div className="w-[750px] xl:w-[800px]">
          <div className="mb-3 font-bold text-white/90 font-mono text-xl tracking-wide ms-2">PROJECT</div>
          <div className="gap-x-10 md:gap-y-5 grid sm:grid-cols-2">
            <div className="card relative headline rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5">
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
              <div className="absolute bottom-8 right-0 left-0">
                <div className="grid grid-cols-2 text-center mt-5">
                  <div>
                    <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1 ">
                      Live Demo
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/HydroTolerance/Zephyderm" target="_blank" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card relative headline1 rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5 ">
              <div className="rounded-lg overflow-hidden">
                <img src={PokedexApi} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Pokemon PokeDex</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70 mb-12">
                  This is a personal project created using <span className="text-white/90 font-bold">React, Tailwind for styling, and the PokéAPI</span>.
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0">
                <div className="grid grid-cols-2 text-center mt-5">
                  <div>
                    <a href="https://pokemon-api-project-lime.vercel.app/Gen1" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1">
                      Live Demo
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/HydroTolerance/Pokemon_Api" target="_blank" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card relative headline2 rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5 ">
              <div className="rounded-lg overflow-hidden">
                <img src={Kali} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Kali: The Darkness Arrive</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70 mb-12">
                  This is a group project for game development created using the 
                  <span className="text-white/90 font-bold"> Unity</span> game engine, with <span className="text-white/90 font-bold"> C#</span> as the scripting language.
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0">
                <div className="grid grid-cols-2 text-center mt-5">
                  <div>
                    <a href="https://blazingwolfstudio32.itch.io/kali-the-darkness-arrive" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1">
                      Download
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/HydroTolerance/kali-the-darkness-arrive" target="_blank" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card relative headline3 rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5 ">
              <div className="rounded-lg overflow-hidden">
                <img src={NavalConquest} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Naval Conquest</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70 mb-12">
                  It's a multiplayer ping-pong game created using the <span className="text-white/90 font-bold"> Unity</span> game engine, with <span className="text-white/90 font-bold">C#</span> as the scripting language, and <span className="text-white/90 font-bold">Firebase</span> for the backend.
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0">
                <div className="grid grid-cols-2 text-center mt-5">
                  <div>
                    <a href="https://github.com/HydroTolerance/Naval_Conquest" target="_blank" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
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
          className="flex justify-center mb-5 group hover:text-blue-500 text-white/90 headline2"
        >
          <label>View More Project </label>
          <FaArrowLeft className="my-auto ms-3 group-hover:rotate-180 transition-transform transform" />
        </Link>
      </div>
    </>
  );
}

export default ProjectComponent;
