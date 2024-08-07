import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { projects } from "../../components/Project_Components/Index";
import {
  frameworkDevTools,
  designerTools,
  scriptingTools,
} from "../../components/Skills_Components";
import { BiLayerPlus } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { PiBracketsCurly } from "react-icons/pi";
import { certifications } from "../../components/Certification_Components";
import {
  FaLink,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Net from "../../assets/Net1.png";
import { experiences } from "../../components/Experience_Components";
import ScrollReveal from "scrollreveal";
import ModalProject from "../../components/Modal_Projects";
import { MdOutlineTouchApp } from "react-icons/md";

export function Home() {
  const [modal, setModal] = useState(false);
  const [selecterproject, setProject] = useState([]);
  useEffect(() => {
    const reveals: string[] = ["#experience", "#project", "#skills", "#certifications",]
    const config = [
      {
        duration: 1000,
        delay: 500,
        distance: '50px',
        origin: 'bottom',
       },
       {
        delay: 500,
        duration: 1000,
        distance: '50px',
        origin: 'left',
        interval: 600
       },
       {
        delay: 1500,
        duration: 1500,
        origin: 'center',
       },
       {
        delay: 300,
        duration: 700,
        distance: '50px',
        origin: 'bottom',
        interval: 300
       },
    ];
     reveals.map((reveal) => (
      ScrollReveal().reveal(reveal, config[0])
     ))
     ScrollReveal().reveal('.blueEffects', config[1]);
     ScrollReveal().reveal('.textReveal', config[3]);
     ScrollReveal().reveal('.blueCirleEffects', config[2]);
  },[])
  const visibility = (project: any) => {
      setProject(project)
      setModal(true);
  };
  return (
    <>
      <Layout>
        <div className="lg:ml-72 relative">
          <div id="aboutMe"></div>
          <div className="relative w-full h-[50em] mb-14 overflow-hidden">
            <div className="absolute w-full h-full sideblurred z-10"></div>
            <div
              className={`w-full h-[50em] flex justify-center items-center bg-cover bg-center absolute z-0`}
              style={{ backgroundImage: `url(${Net})`, opacity: 0.5 }}
            ></div>
            <div className="blueEffects absolute bg-[radial-gradient(ellipse_at_center,_rgb(59,_130,_246,_0.4),_transparent_70%)] w-[40%] h-40 rounded-full rotate-45 top-10 -left-56"></div>
            <div className="blueEffects absolute bg-[radial-gradient(ellipse_at_center,_rgb(217,_70,_239,_0.4),_transparent_70%)] w-[40%] h-40 rounded-full rotate-45 -top-0 right-0 transform translate-x-[40%]"></div>
            <div className="text-center absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <div className="blueCirleEffects absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px]  md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[650px]  bg-[radial-gradient(ellipse_at_center,_rgb(59,_130,_246,_0.2),_transparent_70%)] rounded-full "></div>
              <h2 className="textReveal text-4xl font-bold  tracking-wider text-white/90 md:mb-14 max-md:mb-8 text-[3rem] md:text-[4rem] lg:text-[5rem]">
                PORTFOLIO
              </h2>
              <p className=" textReveal text-lg text-white/70 max-w-[700px] mx-auto mb-14 ">
                Take a look at my projects, the tech I use, and the experience
                I've gained along the way. It's all here to show how much I love
                what I do.
              </p>
              <div className="textReveal relative w-[180px] h-[45px] rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden before:absolute before:top-[-150%] before:left-[-50%] before:right-[-50%] before:bottom-[-150%] before: before:bg-[conic-gradient(white,#3b82f6)] before:rounded-lg before:animate-spin-slow">
                <a
                  href="https://drive.google.com/file/d/1JazlhFCCYZKzFiUWasMS_zQEllPUgQxx/view?usp=drive_link"
                  className="bg-[#19171c] text-white/90 py-3 px-6 top-[1px] right-[1px] bottom-[1px] left-[1px] rounded-lg absolute flex justify-center items-center after:content-['_↗']"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="mx-8  mb-20" id="experience">
            <h2 className="text-3xl  font-bold mb-4 text-center text-blue-400">
              EXPERIENCE
            </h2>
            <p className="text-white/70 mb-6 mx-auto text-center max-w-[600px]">
              Below are some of the work experiences and tasks I have completed.
            </p>
            <div className="flex justify-center items-center text-white/90">
              <ul className="relative list-none space-y-10">
                {experiences.map((experience, index) => (
                  <li
                    key={index}
                    className="md:flex md:space-x-8 items-center "
                  >
                    <div className=" bg-blue-600 p-8 rounded-full flex justify-center items-center before:absolute md:before:content-[''] md:before:h-full before:border-blue-600 md:before:border-4 before:-z-10 before:bottom-0 mb-3 max-md:hidden">
                      <FaBriefcase className="text-[30px] " />
                    </div>
                    <div className="relative w-full">
                      <div className="textReveal before:textReveal md:w-[100%] p-6 bg-white/5 rounded md:before:content-['◀'] before:top-1/2 before:absolute before:-translate-y-1/2  before:-left-3 before:text-white/5">
                        <div className="md:flex justify-between items-center ">
                          <h2 className="text-xl mb-2 font-medium">
                            {experience.name}
                          </h2>
                          <h2 className=" font-medium">{experience.place}</h2>
                        </div>
                        <div className="md:flex justify-between items-center text-white/90">
                          <h2 className=" italic">{experience.title}</h2>
                          <h2 className=" italic">{experience.date}</h2>
                        </div>
                        <hr className="my-2" />
                        <p className="text-gray-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-8  mb-20" id="project">
            <h2 className="text-3xl  font-bold mb-4 text-center text-blue-400">
              PROJECTS
            </h2>
            <p className="text-white/70 mb-4 mx-auto text-center max-w-[600px]">
              Below are some of the projects I've worked on, showcasing my
              skills and experience in web development, design, and more.
            </p>
            {/* <div>
              <div>System</div>
              <div>Graphics</div>
              <div>Illustration</div>
              <div>Logo</div>
            </div> */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded bg-[rgb(37,35,40)] overflow-hidden rounded-t-xl h-full relative group"
                >
                  
                  <img
                    src={project.image[0]}
                    className="w-full h-48  object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => { visibility(project) }}
                  />
                  <MdOutlineTouchApp className="absolute top-2 right-2 text-3xl text-white z-40 cursor-pointer" onClick={() => { visibility(project) }}/>
                  <div className="px-4 py-2 flex flex-col flex-grow relative z-20 bg-[rgb(37,35,40)]">
                    <h2 className="text-xl font-semibold text-white/90">
                      {project.title}
                    </h2>
                    <hr className="my-2" />
                    <div className="text-gray-300 mt-2 flex-grow">
                      {project.categories}
                      {project.stack}
                    </div>
                    <div className="mb-8 text-center mt-6">
                      <a
                        href={project.link.name}
                        target="_blank"
                        className="bg-blue-500 linkShadow text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                      >
                        {project.link.description}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-8 mb-20" id="skills">
            <h2 className="text-3xl  font-bold mb-4 text-center text-blue-400">
              SKILLS
            </h2>
            <p className="text-white/70 mb-4 mx-auto text-center max-w-[600px]">
              Below are some of skills I learned in school, during intership and
              through self-study at home.
            </p>
            <div className="w-full h-full border border-white/30 bg-white/5 grid md:grid-cols-3 rounded-lg text-white/90">
              <div className="md:border-r max-md:border-b border-white/30 flex justify-center text-center">
                <div className="p-10 flex items-center flex-col space-y-4">
                  <div className="bg-blue-600 rounded-full hover:shadow-lg h-14 w-14 flex justify-center items-center transition-transform duration-500 hover:translate-y-[-6px]">
                    <BiLayerPlus className="text-[30px]" />
                  </div>

                  <h2 className="text-lg font-semibold">DESIGNER</h2>
                  <h2 className="text-gray-300/60">
                    Creating clean website, user experience, and characters
                    design
                  </h2>
                  <div>
                    <h2 className="mb-1">Things I like to design</h2>
                    <p className="text-gray-300/60">
                      UX, UI, Characters Design, Logo, Graphics
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-2">Design Tools:</h2>
                    <div className="grid  max-md:grid-cols-4 md:grid-cols-4 gap-x-6">
                      {designerTools.map((design, index) => (
                        <div
                          key={index}
                          className="transition-transform duration-300 hover:translate-y-[-6px] flex flex-col items-center group relative"
                        >
                          {design.icons}
                          <div className=" absolute text-[10px] hidden group-hover:block top-12 transition duration-300">
                            {design.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:border-r max-md:border-b  border-white/30 flex justify-center text-center">
                <div className="p-10 flex items-center flex-col space-y-4">
                  <div className="bg-blue-600 rounded-full h-14 w-14 flex justify-center items-center transition-transform duration-300 hover:translate-y-[-6px]">
                    <FaCode className="text-[30px]" />
                  </div>

                  <h2 className="text-lg font-semibold">SCRIPTINGS</h2>
                  <h2 className="text-gray-300/60">
                    I enjoy coding from scratch and bringing ideas to life in
                    web development, games, and more.
                  </h2>

                  <div>
                    <h2 className="mb-2">Scriptings I Know:</h2>
                    <div className="grid  max-md:grid-cols-4 md:grid-cols-4 gap-x-6 gap-y-6">
                      {scriptingTools.map((script, index) => (
                        <div
                          key={index}
                          className="transition-transform duration-300 hover:translate-y-[-6px] flex flex-col items-center group relative"
                        >
                          {script.icons}
                          <div className=" absolute text-[10px] hidden group-hover:block top-12 transition duration-300">
                            {script.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-white/30 flex justify-center text-center">
                <div className="p-10 flex items-center flex-col space-y-4">
                  <div className="bg-blue-600 rounded-full h-14 w-14 flex justify-center items-center transition-transform duration-300 hover:translate-y-[-6px]">
                    <PiBracketsCurly className="text-[30px]" />
                  </div>

                  <h2 className="text-lg font-semibold">FRAMEWORKS</h2>
                  <h2 className="text-gray-300/60">
                    Working with various frameworks to create efficient and
                    scalable applications.
                  </h2>
                  <div>
                    <h2 className="mb-2">Framework I Knows:</h2>
                    <div className="grid max-md:grid-cols-4 md:grid-cols-4 gap-x-6  gap-y-6">
                      {frameworkDevTools.map((frame, index) => (
                        <div
                          key={index}
                          className="transition-transform duration-300 hover:translate-y-[-6px] flex flex-col items-center group relative"
                        >
                          {frame.icons}
                          <div className=" absolute text-[10px] hidden group-hover:block top-12 transition duration-300">
                            {frame.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-8 mb-20" id="certifications">
            <h2 className="text-3xl  font-bold mb-4 text-center text-blue-400">
              CERTIFICATIONS
            </h2>
            <p className="text-white/70 mb-4 mx-auto text-center max-w-[600px]">
              Below is a list of my certifications that highlight my skills and
              qualifications.
            </p>
            <div className="text-white/90 relative overflow-x-auto">
              <table className="bg-gradient-to-tr from-blue-500/20 rounded-lg table-auto w-full border border-separate border-1 text-center">
                <thead className=" text-white rounded-t-lg">
                  <tr>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Organization</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-2 py-2">Credentials</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{cert.title}</td>
                      <td className="border px-4 py-2">{cert.organization}</td>
                      <td className="border px-4 py-2">{cert.date}</td>
                      <td className="border px-4 py-2">
                        <a
                          href={cert.credential_url}
                          className="inline-block"
                          target="_blank"
                        >
                          <FaLink className="text-xl" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div id="contacts" className="w-full bg-black/40 text-white/90 p-5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl mb-6 text-center">Contact Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <h2 className="text-lg mb-2">Gmail: juls.arola@gmail.com</h2>
                  <h2 className="text-lg">Number: +63 968 219 0167</h2>
                </div>
                <div className="hidden md:flex justify-center items-center">
                  <div className="border-l-2 border-white/60 h-full"></div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg"
                  >
                    <FaGithub className="text-2xl" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg"
                  >
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg"
                  >
                    <FaInstagram className="text-2xl" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {modal && (
      <ModalProject project={selecterproject}  onClose={() => setModal(false)}/>
      )}
    </>
  );
}

export default Home;
