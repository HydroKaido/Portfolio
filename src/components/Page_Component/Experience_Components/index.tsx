import { experiences } from "../../Portfolio_Data/Experience_Data";
import { FaBriefcase } from "react-icons/fa";

function ExperienceComponents() {
  return (
    <div className="flex justify-center items-center text-white/90">
      <ul className="relative list-none space-y-10">
        {experiences.map((experience, index) => (
          <li key={index} className="md:flex md:space-x-8 items-center ">
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
                <p className="text-gray-300">{experience.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceComponents;
