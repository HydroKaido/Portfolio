import Zephyderm from "../../assets/Zephyderm Design.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProjectComponent() {
  return (
    <>
        <div className="flex justify-center items-center mb-10 mx-5 mt-10">
            <div className="md:w-[750px] xl:w-[800px]">
            <div className="mb-3 font-bold">
                PROJECT
              </div>
            <div className="gap-x-10 gap-y-5 grid sm:grid-cols-2">
              <div className="card border border-gray-300 rounded-lg shadow-lg  mb-5">
                <div className="rounded-lg overflow-hidden">
                  <img src={Zephyderm} alt="" className="rounded-t-lg" />
                </div>
                <div className="border-b-2">
                  <div className="ms-3 my-2 font-bold">
                    <div>
                      Zephyderm: Appointment System and 
                    </div>
                    <div>
                      Client Monitoring
                    </div>
                  </div>

                </div>
                <div className="border-b-2">
                  <div className=" ms-3 my-2">
                  Subscription-based service that allows users to enter Amazon
                  product URLs to have them actively scraped for better prices,
                    receiving notifications when price is low.
                  </div>
                </div>
                  <div className="grid grid-cols-3">
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs my-2">HTML</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs my-2">CSS</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs my-2">BOOTSTRAP</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs mb-2 ">JAVASCRIPT</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs mb-2">JQUERY</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs mb-2">PHP</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs mb-2">MYSQL</h2>
                </div>
              </div>
              <div className="card border border-gray-300 rounded-lg shadow-lg mb-5">
                <div></div>
                <div className="rounded-lg overflow-hidden">
                  <img src={Zephyderm} alt="" className="rounded-t-lg" />
                </div>
                <div className="border-b-2">
                  <div className="ms-3 my-2 font-bold">
                    <div>
                      Zephyderm: Appointment System and 
                    </div>
                    <div>
                      Client Monitoring
                    </div>
                  </div>

                </div>
                <div className="border-b-2">
                  <div className=" ms-3 my-2">
                  Subscription-based service that allows users to enter Amazon
                  product URLs to have them actively scraped for better prices,
                    receiving notifications when price is low.
                  </div>
                </div>
                  <div className="grid grid-cols-3">
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs my-2">HTML</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs my-2">CSS</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs my-2">BOOTSTRAP</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs mb-2 ">JAVASCRIPT</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs mb-2">JQUERY</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs mb-2">PHP</h2>
                    <h2 className="border-2 rounded text-center px-2 mx-2 text-xs mb-2">MYSQL</h2>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div>
        <Link to={'/project'}  className="flex justify-center mb-5 group hover:text-blue-500">
            <label>View More Project </label>
            <FaArrowLeft  className="my-auto ms-3 group-hover:rotate-180 transition-transform transform"/>
          </Link>
        </div>
    </>
  )
}

export default ProjectComponent