interface Modal {
  project: any;
  onClose: any;
}
import { useState } from "react";

function ModalProject({ project, onClose }: Modal) {
  const [slide, setSlide] = useState(0);
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
                src={project.image[slide]}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setSlide(slide - 1)}
              disabled={slide === 0}
              className={`px-4 py-2 rounded-lg ${
                slide === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Prev Slide
            </button>
            <div className="text-center text-white/90">
              <span className="font-semibold">{slide + 1}</span>
              <span> / {project.image.length}</span>
            </div>
            <button
              onClick={() => setSlide(slide + 1)}
              disabled={slide >= project.image.length - 1}
              className={`px-4 py-2 rounded-lg ${
                slide >= project.image.length - 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Next Slide
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalProject;
