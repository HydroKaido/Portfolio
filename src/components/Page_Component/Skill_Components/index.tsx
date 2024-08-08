import {
  frameworkDevTools,
  designerTools,
  scriptingTools,
} from "../../Portfolio_Data/Skills_Data";
import { BiLayerPlus } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { PiBracketsCurly } from "react-icons/pi";

function SkillComponents() {
  return (
    <>
      <div className="w-full h-full border border-white/30 bg-white/5 grid md:grid-cols-3 rounded-lg text-white/90">
        <div className="md:border-r max-md:border-b border-white/30 flex justify-center text-center">
          <div className="p-10 flex items-center flex-col space-y-4">
            <div className="bg-blue-600 rounded-full hover:shadow-lg h-14 w-14 flex justify-center items-center transition-transform duration-500 hover:translate-y-[-6px]">
              <BiLayerPlus className="text-[30px]" />
            </div>

            <h2 className="text-lg font-semibold">DESIGNER</h2>
            <h2 className="text-gray-300/60">
              Creating clean website, user experience, and characters design
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
              I enjoy coding from scratch and bringing ideas to life in web
              development, games, and more.
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
              Working with various frameworks to create efficient and scalable
              applications.
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
    </>
  );
}

export default SkillComponents;
