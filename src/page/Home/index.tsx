import Layout from "../../layout/Layout";
import ProjectComponent from "../../components/Home_Components/Project_Component";
import LanguagesTools from "../../components/Home_Components/Languages_and_Tools";
import Profile from "../../components/Home_Components/Profile_Components";



function Home() {
  return (
    <>
      <Layout>
        {/* Profile Component */}
          <Profile/>
        {/* Project Component */}
          <ProjectComponent/>
        {/* Languages and Tools  */}
          <LanguagesTools/>
          <div className="flex justify-center items-center mb-3 mx-5 mt-10">
            <div className="md:w-[750px] xl:w-[800px]">
            <div className="mb-3 font-bold">CERTIFICATES</div>
              <div className="gap-x-10 gap-y-5 grid sm:grid-cols-2">
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}

export default Home;
