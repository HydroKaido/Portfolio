import Layout from "../../layout/Layout";
import ProfileImage from "../../assets/Arola_Image.webp";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import ProjectComponent from "../../components/Project_Component";
import { JavascriptOriginal } from 'devicons-react';
import { Html5Plain } from 'devicons-react';
import { Css3Plain } from 'devicons-react';
import { PhpPlain } from 'devicons-react';
import { TailwindcssOriginal } from 'devicons-react';
import { BootstrapOriginal } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { LaravelOriginal } from 'devicons-react';
import { MysqlOriginal } from 'devicons-react';
import { ComposerOriginal } from 'devicons-react';
import { PhotoshopOriginal } from 'devicons-react';
import { FigmaOriginal } from 'devicons-react';
import { GithubOriginal } from 'devicons-react';
import { IonicOriginal } from 'devicons-react';
import { UnityOriginal } from 'devicons-react';
import { VscodeOriginal } from 'devicons-react';


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
            <div className="md:w-[750px] xl:w-[800px] mx-3">
              <div className="mb-3 font-bold">
                LANGUAGES AND TOOLS
              </div>
              <div className="gap-10 md:grid-cols-6 grid max-md:grid-cols-5 max-sm:gap-x-2 max-sm:gap-y-4 max-sm:grid-cols-3">
                <div ><Html5Plain className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><Css3Plain className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><JavascriptOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><ReactOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><BootstrapOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><TailwindcssOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><PhpPlain className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><LaravelOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><MysqlOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><ComposerOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><PhotoshopOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><FigmaOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><IonicOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><GithubOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><UnityOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
                <div><VscodeOriginal className="border-2 shadow-lg p-3 rounded" size="100"/></div>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}

export default Home;
