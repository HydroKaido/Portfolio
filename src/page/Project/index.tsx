import  { useEffect } from "react";
import Layout from "../../layout/Layout";
import { projects } from "../../components/Project_Components/Project_Data";
import ScrollReveal from 'scrollreveal';

function Project() {
  useEffect(() => {
    ScrollReveal().reveal('.headline', 
    { 
      delay: 200,
      interval: 200,
      duration: 1000,
     }
  )}, []);

  return (
    <>
      <Layout>
        <div className="flex justify-center items-center mb-3 mx-5 mt-10">
          <div className="w-[750px] xl:w-[800px]">
            {/* Layout */}
            {projects.map((project, index) => (
              <div key={index}>
                <div className='card rounded-2xl bg-white/5 p-7  hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5 headline'>
                  <div className="flex justify-center">
                    <div className="grid md:grid-cols-2">
                      <div className="flex flex-col max-md:order-1">
                        <h2 className="mb-5 text-white/90 font-bold">{project.title}</h2>
                        <div className="flex justify-center items-center me-3">
                          <h2 className="text-gray-300/70">{project.songName}</h2>
                        </div>
                      </div>
                      <div className="flex justify-center items-center max-md:order-0 mb-3">
                        <img src={project.image} alt="" className="object-contain w-full h-auto"/>
                      </div>
                      <div className="max-md:order-1">
                        {project.link}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
        
        </div>
      </Layout>
    </>
  );
}

export default Project;
