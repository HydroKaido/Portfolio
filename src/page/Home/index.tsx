import Layout from "../../layout/Layout";
import ProfileImage from "../../assets/Arola_Image.webp";
import Zephyderm from "../../assets/Zephyderm Design.jpg";
import { FaGithub, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Layout>
        <div className="flex justify-center items-center ">
            <div className="md:w-[750px] xl:w-[800px] mt-7">
            <div className="gap-10 sm:grid sm:grid-cols-2 mx-2 max-md:mx-4">
              <div className="flex flex-col justify-center">
                <div className="max-md:flex max-md:justify-center">
                  <img
                    src={ProfileImage}
                    alt=""
                    className="rounded-full h-48 w-48 mb-5"
                  />
                </div>
                <div className="">
                  <div className="mb-2 font-bold text-xl max-md:text-center">
                    HI, Im Mohammad Jul Hafiz Arola
                  </div>
                  
                  <div className="mb-2">
                    A software engineer with a passion in ui and front end
                    development
                  </div>
                  <div className="flex mb-2 max-md:justify-center">
                    <FaGithub className="text-2xl me-3" />
                    <FaLinkedin className="text-2xl" />
                  </div>
                </div>

              </div>
              
              <div className="">
                <div className=" text-wrap">
                  <div className="mb-2">
                    Bachelor of Science in Informationa and Technology. My
                    interest in web development sparked during college, where I
                    discovered a passion for building functional web applications.
                  </div>
                  <div className="mb-2">
                    Continuously seeking to enhance my skills, I work on personal
                    projects using a range of technologies. These projects not
                    only serve as a creative outlet but also as a means to stay
                    up-to-date with the latest trends and tools in web
                    development.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-10 mx-5">
          <div className="gap-x-10 gap-y-5 sm:grid sm:grid-cols-2 mt-10">
            <div>
              <div className="flex flex-row font-bold">PROJECT</div>
            </div>
            <div></div>
            <div className="card border border-gray-300 rounded-lg shadow-lg xl:w-[400px] md:w-[350px] mb-5">
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
            <div className="card border border-gray-300 rounded-lg shadow-lg xl:w-[400px] md:w-[350px] mb-5">
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
        <div>
        <Link to={'/project'}  className="flex justify-center mb-5 group hover:text-blue-500">
            <label>View More Project </label>
            <FaArrowLeft  className="my-auto ms-3 group-hover:rotate-180 transition-transform transform"/>
          </Link>
        </div>
        {/* Experience */}
        <div className="flex justify-center items-center mb-10 mx-5">
          <div className="flex justify-between md:w-[800px]">
            
              <div className="font-bold">LANGUANGES AND TOOLS</div>
              <div>
                
              </div>
          </div>
</div>

            
      </Layout>
    </>
  );
}

export default Home;
