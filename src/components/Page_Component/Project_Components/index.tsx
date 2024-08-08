import { MdOutlineTouchApp } from "react-icons/md";
import { projects } from "../../Portfolio_Data/Project_Data/Index";

interface Props {
  visibility: any;
  types: any;
}

function ProjectComponents({ visibility, types }: Props) {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {projects.map((project, index) =>
          types === project.type ? (
            <div
              key={index}
              className="flex flex-col rounded bg-[rgb(37,35,40)] overflow-hidden rounded-t-xl h-full relative group"
            >
              <img
                src={project.image[0]}
                className="w-full h-48  object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => {
                  visibility(project);
                }}
              />
              <MdOutlineTouchApp
                className="absolute top-2 right-2 text-3xl text-white z-40 cursor-pointer"
                onClick={() => {
                  visibility(project);
                }}
              />
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
          ) : null
        )}
      </div>
    </>
  );
}

export default ProjectComponents;
