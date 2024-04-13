import Layout from "../../layout/Layout";
import ProfileImage from "../../assets/Arola_Image.webp";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import ProjectComponent from "../../components/Project_Component";
import Javascript from '../../assets/Stack/javascript.png';
import Html from '../../assets/Stack/html.png';
import Css from '../../assets/Stack/css.png';
import Php from '../../assets/Stack/php.png';
import Tailwind from '../../assets/Stack/tailwind.png';
import Bootstrap from '../../assets/Stack/bootstrap.png';
import React from '../../assets/Stack/react.png';
import Laravel from '../../assets/Stack/laravel.png';
import Mysql from '../../assets/Stack/mysql.png';
import Composer from '../../assets/Stack/composer.png';
import Photoshop from '../../assets/Stack/photoshop.png';
import Figma from '../../assets/Stack/figma.png';
import Github from '../../assets/Stack/github.png';
import Ionic from '../../assets/Stack/ionic.png';
import Unity from '../../assets/Stack/unity.png';
import Vscode from '../../assets/Stack/vscode.png';


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
        {/* Project Component */}
        <ProjectComponent/>
        {/* Experience */}
        <div className="flex  justify-center items-center mb-10">
            <div className="md:w-[750px] xl:w-[800px] mx-5">
              <div className="mb-3 font-bold">
                LANGUAGES AND TOOLS
              </div>
              <div className="gap-10 md:grid-cols-8 grid max-md:grid-cols-6  max-sm:gap-10 max-sm:gap-y-4 max-sm:grid-cols-5">
                <div ><img src={Html} alt="" className=""/></div>
                <div ><img src={Css} alt="" className=""/></div>
                <div ><img src={Javascript} alt="" className=""/></div>
                <div ><img src={React} alt="" className=""/></div>
                <div ><img src={Bootstrap} alt="" className=""/></div>
                <div ><img src={Tailwind} alt="" className=""/></div>
                <div ><img src={Php} alt="" className=""/></div>
                <div ><img src={Mysql} alt="" className=""/></div>
                <div ><img src={Laravel} alt="" className=""/></div>
                <div ><img src={Composer} alt="" className=""/></div>
                <div ><img src={Unity} alt="" className=""/></div>
                <div ><img src={Vscode} alt="" className=""/></div>
                <div ><img src={Github} alt="" className=""/></div>
                <div ><img src={Ionic} alt="" className=""/></div>
                <div ><img src={Photoshop} alt="" className=""/></div>
                <div ><img src={Figma} alt="" className=""/></div>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}

export default Home;
