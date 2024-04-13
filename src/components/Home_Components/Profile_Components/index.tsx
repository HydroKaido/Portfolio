import ProfileImage from "../../../assets/Arola_Image.webp";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
function Profile() {
  return (
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
  )
}

export default Profile