import { useState } from "react";
import { projects, graphics } from "../Portfolio_Data/Project_Data/Index";

interface Modal {
  project: any;
  onClose: any;
}

function ModalProject({ project, onClose }: Modal) {
  const [slide, setSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(
    project.type === "Web"
      ? projects.findIndex((element) => element.id === project.id)
      : graphics.findIndex((element) => element.id === project.id)
  );

  const countImage = project.type === "Web" ? projects.length : graphics.length;
  const currentProject =
    project.type === "Web" ? projects[currentSlide] : graphics[currentSlide];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
    console.log(project.type.length || project.type === "Graphics");
  };
  const handleNextSlide = () => {
    console.log(currentSlide);
    console.log(project.type.length);
    setCurrentSlide(currentSlide + 1);
    setSlide(0);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="relative md:w-[850px] mx-4 md:h-[650px] max-md:h-auto  bg-[#252328] rounded p-6 flex flex-col border-white/20 border "
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex justify-between">
            <h2 className="text-white/90 text-lg font-medium">
              {currentProject.title}
            </h2>
            <div className="text-white/90 cursor-pointer" onClick={onClose}>
              &#x2715;
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="h-[500px]">
              <img
                src={currentProject.image[slide]}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <button
                onClick={() => {
                  handlePrevSlide();
                }}
                className={`px-4 py-2 text-xl ${
                  (project.type === "Web" && currentSlide === 0) ||
                  (project.type === "Graphics" && currentSlide === 0) ||
                  (project.type === "Illustration" &&
                    project.type.length - 2 >= currentProject.id)
                    ? "text-gray-500/30 cursor-not-allowed"
                    : "text-white/90"
                }`}
                disabled={
                  (project.type === "Web" && currentSlide === 0) ||
                  (project.type === "Graphics" && currentSlide === 0) ||
                  (project.type === "Illustration" && project.type.length - 2 >= currentProject.id)
                }
              >
                &#60;&#60;
              </button>
              <button
                onClick={() => {
                  setSlide(slide - 1);
                }}
                disabled={slide === 0}
                className={`px-4 py-2 text-xl ${
                  slide === 0
                    ? "text-gray-500/30 cursor-not-allowed"
                    : "text-white/90 "
                }`}
              >
                &#60;
              </button>
            </div>
            <div className="text-center text-white/90">
              <span className="font-semibold">{slide + 1}</span>
              <span> / {currentProject.image.length}</span>
            </div>
            <div>
              <button
                onClick={() => {
                  setSlide(slide + 1);
                }}
                disabled={slide >= currentProject.image.length - 1}
                className={`px-4 py-2 text-xl ${
                  slide >= currentProject.image.length - 1
                    ? "text-gray-500/30 cursor-not-allowed"
                    : "text-white/90"
                }`}
              >
                &#62;
              </button>
              <button
                onClick={() => {
                  handleNextSlide();
                }}
                disabled={
                  (project.type === "Web" && currentProject.id >= countImage) ||
                  (project.type === "Graphics" &&
                    currentProject.id >= project.type.length + 1) ||
                  (project.type === "Illustration" &&
                    currentProject.id >= countImage)
                }
                className={`px-4 py-2 text-xl ${
                  (project.type === "Web" && currentProject.id >= countImage) ||
                  (project.type === "Graphics" &&
                    currentProject.id >= project.type.length + 1) ||
                  (project.type === "Illustration" &&
                    currentProject.id >= countImage)
                    ? "text-gray-500/30 cursor-not-allowed"
                    : "text-white/90 "
                }`}
              >
                &#62;&#62;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalProject;
