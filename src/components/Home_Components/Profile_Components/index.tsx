import ProfileImage from "../../../assets/Arola_Image.webp";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
function Profile() {
  return (
    <div className="flex justify-center items-center ">
            <div className="md:w-[750px] xl:w-[800px] mt-7">
            <div className="flex flex-wrap max-md:justify-center space-x-10 mx-4">
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
                    <h2 className=" text-[27px] font-bold">
                      Mohammad Jul Hafiz Arola
                    </h2>
                    <h2 className="text-xl mb-5">
                      Web Developer and Character Design.
                    </h2>
                    <div className="flex flex-wrap justify-center">
                      <div className="flex me-3">
                        <a href="" className="flex">
                          <FaGithub className="text-2xl me-2"/>
                          <h2>Github</h2>
                        </a>
                      </div>
                      <div className="flex me-3">
                        <a href="" className="flex">
                          <FaLinkedin className="text-2xl me-2"/>
                          <h2>LinkedIn</h2>
                        </a>
                      </div>
                      <div className="flex me-3">
                        <a href="" className="flex">
                          <FaTwitter className="text-2xl me-2"/>
                          <h2>Twitter</h2>
                        </a>
                      </div>
                      <div className="flex">
                        <a href="" className="flex">
                          <FaInstagram className="text-2xl me-2"/>
                          <h2>Instagram</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Profile