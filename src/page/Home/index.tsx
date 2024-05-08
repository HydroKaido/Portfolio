import Layout from "../../layout/Layout";
import ProjectComponent from "../../components/Home_Components/Project_Component";
import LanguagesTools from "../../components/Home_Components/Languages_and_Tools";
import Profile from "../../components/Home_Components/Profile_Components";
import ExperienceComponet from "../../components/Home_Components/Experience_Component/ExperienceComponent";

function Home() {
  return (
    <>

      <Layout>
        {/* Profile Component */}
        <Profile />
        {/* Experience Component */}
        <ExperienceComponet/>
        {/* Project Component */}
        <ProjectComponent />
        {/* Languages and Tools  */}
        <LanguagesTools />
      </Layout>
    </>
  );
}

export default Home;
