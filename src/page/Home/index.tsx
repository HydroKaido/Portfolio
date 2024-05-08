import Layout from "../../layout/Layout";
import ProjectComponent from "../../components/Home_Components/Project_Component";
import LanguagesTools from "../../components/Home_Components/Languages_and_Tools";
import Profile from "../../components/Home_Components/Profile_Components";

function Home() {
  return (
    <>

      <Layout>
        {/* Profile Component */}
        <Profile />
        {/* Project Component */}

        <div className="flex justify-center items-center mb-3 mx-5 mt-10">
          <div className="md:w-[750px] xl:w-[800px]">
            <div className="mb-3 text-xl tracking-wide font-bold text-white/90 font-mono">EXPERIENCE</div>
            <div className="card  rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5 ">
              <div className="p-4">
                <div className="flex justify-between text-sm mb-3 text-white/90">
                  <h2>Graphics Designers</h2>
                  <h2>Jul - 2023 to Oct - 2023</h2>
                </div>
                <div className="font-bold text-white/90 font-mono text-xl tracking-wide ">
                  JOVASH INTERNATIONAL INC. (INTERN)
                </div>
                <div className="font-bold text-gray-300/70 font-mono text-xl tracking-wide ">
                  486 Hours rendered
                </div>
                <div className="text-sm text-gray-300/70 mt-3">
                  <ul className="list-disc list-inside">
                    <li>
                      Created graphics for marketing materials, social media
                      posts, and others graphics materials.
                    </li>
                    <li>
                      Assisted in the development of branding materials for new
                      product launches.
                    </li>
                    <li>
                      Received positive feedback from supervisors for creativity
                      and attention to detail.
                    </li>
                  </ul>
                </div>
                <div className="text-sm text-gray-300/70  mt-3">
                  <p>
                    <span className="font-bold text-gray-300">Skills Developed:</span>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Proficiency in Adobe Photoshop, Illustrator, and Canva.
                    </li>
                    <li>
                      Improved time management abilities by effectively
                      prioritizing tasks and meeting deadlines.
                    </li>
                    <li>
                      Enhanced collaboration skills through teamwork with
                      colleagues on various projects.
                    </li>
                  </ul>
                </div>
                <div className="text-sm text-gray-300/70  mt-3">
                  <p>
                    <span className="font-bold text-gray-300">Learning Experience:</span>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Gained hands-on experience in graphic design, deepening
                      understanding of visual communication principles.
                    </li>
                    <li>
                      Learned to adapt quickly to feedback and incorporate
                      changes into design projects.
                    </li>
                  </ul>
                </div>
                <div className="text-gray-300/70 mt-10 underline">
                  <a href="https://drive.google.com/file/d/1jviIUYzoo7HaU4JfC0_95dlTVQOXaAMS/view?usp=sharing" target="_blank" className="">View Certificates</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectComponent />
        {/* Languages and Tools  */}
        <LanguagesTools />
      </Layout>
    </>
  );
}

export default Home;
