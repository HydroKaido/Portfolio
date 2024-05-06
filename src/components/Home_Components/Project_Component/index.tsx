import Zephyderm from "../../../assets/Zephyderm Design.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProjectComponent() {
  return (
    <>
      <div className="flex justify-center items-center mb-3 mx-5 mt-10">
        <div className="md:w-[750px] xl:w-[800px]">
          <div className="mb-3 font-bold text-white/90 font-mono text-xl tracking-wide ">PROJECT</div>
          <div className="gap-x-10 gap-y-5 grid md:grid-cols-2">
            <div className="card  rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5 shadow-xl hover:shadow-rose-500/10">
              <div className="rounded-lg overflow-hidden">
                <img src={Zephyderm} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Zephyderm: Appointment System and Client Monitoring</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70">
                  Zephyderm is a capstone project this project created by this 
                </div>
              </div>
              {/* <div className="grid grid-cols-3">
                <h2 className=" rounded text-center px-2 mx-2 text-xs">
                  HTML
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs">
                  CSS
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  BOOTSTRAP
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  JAVASCRIPT
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  JQUERY
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  PHP
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  MYSQL
                </h2>
              </div> */}
              <div className="grid grid-cols-2 text-center mt-5">
                <div>
                  <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1 ">
                    Live Demo
                  </a>
                </div>
                <div>
                  <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                    View Github
                  </a>
                </div>

              </div>
            </div>
            <div className="card  rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5  shadow-xl hover:shadow-rose-500/10">
              <div className="rounded-lg overflow-hidden">
                <img src={Zephyderm} alt="" className="rounded-t-lg" />
              </div>
              <div className="">
                <div className="ms-3 my-5 font-bold">
                  <div className="text-white/90">Zephyderm: Appointment System and Client Monitoring</div>
                </div>
              </div>
              <div className="">
                <div className=" ms-3 my-3 text-gray-300/70">
                  Zephyderm is a capstone project this project created by this 
                </div>
              </div>
{/*               <div className="grid grid-cols-3">
                <h2 className=" rounded text-center px-2 mx-2 text-xs">
                  HTML
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs">
                  CSS
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  BOOTSTRAP
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  JAVASCRIPT
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  JQUERY
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  PHP
                </h2>
                <h2 className=" rounded text-center px-2 mx-2 text-xs ">
                  MYSQL
                </h2>
              </div> */}
              <div className="grid grid-cols-2 text-center mt-5">
                <div>
                  <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1">
                    Live Demo
                  </a>
                </div>
                <div>
                  <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                    View Github
                  </a>
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
