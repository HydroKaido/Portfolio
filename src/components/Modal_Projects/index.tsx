import { useState } from "react";
import { projects, graphics } from "../Portfolio_Data/Project_Data/Index";

interface Modal {
  project: any;
  onClose: any;
}

function ModalProject({ project, onClose }: Modal) {
  const [slide, setSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(
    project.type === 'Web' ? projects.findIndex((element) => element.id === project.id) : graphics.findIndex((element) => element.id === project.id)
  );

  const currentProject = project.type === 'Web' ? projects[currentSlide] : graphics[currentSlide];

  const handleNextSlide = () => {
    if (slide < currentProject.image.length - 1) {
      setSlide(slide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  const handleNextProject = () => {
    const maxSlides: { [key: string]: number } = {
      Web: 4,
      Graphics: 7,
      Illustration: 23
    };
    if (currentSlide < maxSlides[project.type]) {
      setCurrentSlide(currentSlide + 1);
      setSlide(0);
    }
  };

  const handlePrevProject = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setSlide(0);
    }
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
            <h2 className="text-white/90 text-lg font-medium">{project.title}</h2>
            <div className="text-white/90 cursor-pointer" onClick={onClose}>&#x2715;</div>
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
                onClick={handlePrevProject}
                className={`px-4 py-2 text-xl ${
                  (project.type === 'Web' && currentSlide === 0) || 
                  (project.type === 'Graphics' && currentSlide === 0) ||
                  (project.type === 'Illustration' && 10 >= currentProject.id)
                    ? "text-gray-500/30 cursor-not-allowed"
                    : "text-white/90"
                }`}
                disabled={
                  (project.type === 'Web' && currentSlide === 0) || 
                  (project.type === 'Graphics' && currentSlide === 0) ||
                  (project.type === 'Illustration' && 10 >= currentProject.id)
                }
              >
                &#60;&#60;
              </button>
              <button
                onClick={handlePrevSlide}
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
                onClick={handleNextSlide}
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
                onClick={handleNextProject}
                disabled={currentSlide >= (project.type === 'Web' ? 4 : (project.type === 'Graphics' ? 7 : 23))}
                className={`px-4 py-2 text-xl ${
                  currentSlide >= (project.type === 'Web' ? 4 : (project.type === 'Graphics' ? 7 : 23))
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
