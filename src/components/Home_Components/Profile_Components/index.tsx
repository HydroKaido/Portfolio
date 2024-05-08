import ProfileImage from "../../../assets/Arola_Image.webp";
import { FaGithub,  FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Profile() {
  return (
    <>
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-50">
          <div className=" h-1/2 bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.2]"></div>
        </div>

    <div className="flex justify-center items-center ">
            <div className="md:w-[750px] xl:w-[800px] sm:mt-7">
            <div className="flex flex-wrap max-lg:justify-center  mx-4">
              <div className="flex-wrap">
                <div className="flex justify-center">
                  <img
                    src={ProfileImage}
                    alt=""
                    className="rounded-full h-48 w-48 mb-5"
                  />
                </div>
              </div>
              <div className="sm:flex sm:justify-center sm:items-center ">
                <div className="max-md:text-center sm: mx-10">
                  <div className="mb-2">
                    <h2 className=" text-[25px] font-bold text-white/90 font-mono ">MOHAMMAD JUL HAFIZ AROLA
                    </h2>
                    <h2 className=" text-gray-300 mb-3">
                      Web Developer and Character Design
                    </h2>
                    <h2 className=" mb-5 text-gray-300/70">
                       mohammadjulhafizarola@gmail.com
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