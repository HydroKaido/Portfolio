import ProfileImage from "../../../assets/Arola_Image.webp";
import { FaGithub,  FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Profile() {
  return (
    <>


    <div className="flex justify-center items-center ">
            <div className="md:w-[750px] xl:w-[800px] sm:mt-7">
            <div className="flex flex-wrap max-lg:justify-center space-x-10 mx-4">
              <div className="flex-wrap">
                <div className="flex justify-center">
                  <img
                    src={ProfileImage}
                    alt=""
                    className="rounded-full h-48 w-48 mb-5"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="max-sm:text-center">
                  <div className="mb-2">
                    <h2 className=" text-[27px] font-bold text-white/90 font-mono tracking-wide ">MOHAMMAD JUL HAFIZ AROLA
                    </h2>
                    <h2 className="text-xl mb-5 text-gray-300/70">
                      Web Developer and Character Design.
                    </h2>
                    <div className="flex flex-wrap max-sm:justify-center">
                      <div className="flex">
                        <a href="https://github.com/HydroTolerance" target="_black" className="flex text-gray-300/70">
                          <FaGithub className="text-2xl me-2"/>
                          <h2 className="max-sm:hidden">Github</h2>
                        </a>
                      </div>
                      <div className="mx-3 text-gray-300/70">
                        |
                      </div>
                      <div className="flex">
                        <a href="https://www.linkedin.com/in/mohammad-jul-hafiz-arola-788232276/" target="_black" className="flex">
                          <FaLinkedin className="text-2xl me-2 text-blue-500"/>
                          <h2 className="text-gray-300/70 max-sm:hidden">LinkedIn</h2>
                        </a>
                      </div>
                      <div className="mx-3 text-gray-300/70">
                        |
                      </div>
                      <div className="flex">
                        <a href="https://www.instagram.com/hydrotolerance/" target="_black" className="flex">
                          <FaInstagram className="text-2xl me-2 text-rose-600"/>
                          <h2 className="text-gray-300/70 max-sm:hidden">Instagram</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        </>
  )
}

export default Profile