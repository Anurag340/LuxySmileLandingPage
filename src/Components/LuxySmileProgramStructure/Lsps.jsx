import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const PhaseDetail = ({ title, description }) => (
  <div className="border border-green-950 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Lsps = () => (
  <div className=" text-gray-800">
    <Navbar />
    <main className="text-center mt-40 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mt-8">
        The <span className="text-yellow-500">LuxySmile</span> Program Structure
      </h1>
      <p className="text-gray-600 text-lg mx-auto md:w-[50%] w-[100%] mt-4">
        We designed LuxySmile to cover every phase of dental care—from initial screening to post-treatment follow-up—underpinned by internationally benchmarked safety and quality standards.
      </p>
      <div className="h-[60vh] w-full " >
        <img className="w-full h-full object-cover"  src="Images/lsps.png" alt="" />

      </div>

      <div className="h-[1px] w-full bg-[var(--luxgreen)] mx-auto my-[6vh] " ></div>
      <div className="mt-16 space-y-3">
        {/* First row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <PhaseDetail 
            title="Phase 1: Coordination & Setup" 
            description="Involves assessing the institution's size, hours, and expected turnout, promoting the camp through digital and print materials, and selecting a clean, ventilated space for AI diagnostics and treatment stations." 
          />
          <PhaseDetail 
            title="Phase 2: AI-Powered Screening" 
            description="AI-Powered Screening uses contactless AI scans for quick diagnosis, provides digital reports, enables consultations, and allows bookings via the LuxySmile App, with treatments limited to select settings." 
          />
        </div>
        
        {/* Second row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <PhaseDetail 
            title="Phase 3: Treatment Camp" 
            description="It provides a luxury setup with advanced treatments, sterilization, and optional CCTV for transparency and comfort." 
          />
          <PhaseDetail 
            title="Phase 4: Post-Treatment Support" 
            description="Post-Treatment Support offers follow-ups, health reports, and seamless referrals via the LuxySmile App." 
          />
          <PhaseDetail 
            title="Phase 5: OraScan Pro AI Kiosk" 
            description="This offers AI kiosks for 24/7 scanning, insights, and remote consultations, enhancing AI-driven healthcare access." 
          />
        </div>
      </div>
      <Footer/>
    </main>
  </div>
);

export default Lsps;
