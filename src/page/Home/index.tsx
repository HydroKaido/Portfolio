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
  <div className="w-[800px]">
    <div className="mb-3 font-bold">EXPERIENCE</div>
    <div className="bg-gray-200 rounded">
      <div className="p-4">
        <div className="flex justify-between text-sm mb-3">
          <h2>Graphics Designers</h2>
          <h2>July - 2023 to October - 2023</h2>
        </div>
        <div className="font-bold">
          JOVASH INTERNATION INC. <span className="italic">(INTERN)</span>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <ul className="list-disc list-inside">
            <li>Created graphics for marketing materials, social media posts, and website banners.</li>
            <li>Assisted in the development of branding materials for new product launches.</li>
            <li>Collaborated with the marketing team to conceptualize and execute design projects.</li>
            <li>Received positive feedback from supervisors for creativity and attention to detail.</li>
          </ul>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <p><span className="font-bold">Skills Developed:</span></p>
          <ul className="list-disc list-inside">
            <li>Proficiency in Adobe Photoshop, Illustrator, and InDesign.</li>
            <li>Improved time management abilities by effectively prioritizing tasks and meeting deadlines.</li>
            <li>Enhanced collaboration skills through teamwork with colleagues on various projects.</li>
          </ul>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <p><span className="font-bold">Impact:</span></p>
          <ul className="list-disc list-inside">
            <li>Increased engagement on social media platforms by 20% through visually appealing marketing materials.</li>
            <li>Contributed to the successful launch of a new product line by creating compelling graphics.</li>
          </ul>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <p><span className="font-bold">Learning Experience:</span></p>
          <ul className="list-disc list-inside">
            <li>Gained hands-on experience in graphic design, deepening understanding of visual communication principles.</li>
            <li>Learned to adapt quickly to feedback and incorporate changes into design projects.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
      </Layout>
    </>
  );
}

export default Home;
