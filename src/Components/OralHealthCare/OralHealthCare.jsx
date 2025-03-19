import { RxLapTimer } from "react-icons/rx";
import { FaRegGem } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { IoTimerOutline } from "react-icons/io5";
import { FaMapMarkerAlt, FaMoneyBillWave, FaRegLightbulb } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const OralHealthCare = () => {
  return (
    <>
    <Navbar />
    <main className="px-6 md:px-16 lg:px-32 mt-24 py-8">
      <section className="mb-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why <span className="text-yellow-500">Oral Care</span> Matters
        </h1>
        <div className="w-full h-[1px] bg-zinc-400 mb-4 " ></div>
        <p className="text-gray-600 mb-6">
          Oral health is an integral part of overall well-being, yet it remains one of the most overlooked aspects of healthcare. Poor oral hygiene can lead to dental diseases such as cavities, gum infections, and tooth loss, while also being linked to more severe systemic conditions including heart disease, diabetes, and respiratory infections. Despite its importance, many individuals fail to seek timely dental care due to various barriers, leading to preventable oral health issues that affect their quality of life.
        </p>
        <div className="w-full h-[50vh] rounded-lg object-cover object-center overflow-hidden " >  
        <img
          src="https://storage.googleapis.com/a1aa/image/MzjW4wwOW2r89a5iNDq2Auqiqa5hpgyhpYoz58weuFQ.jpg"
          alt="Dental clinic with modern equipment"
          className="w-full h-full object-cover "
        />
        </div>
      </section>
      {/* this section */}
      <section className="mb-12 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Challenges in <span className="text-yellow-500">Traditional Dental</span> Services
        </h2>
        <p className="text-gray-600 mb-6">
          While dental clinics serve as the primary source of oral healthcare, they often come with multiple challenges that prevent individuals from accessing timely treatment. Some of the common challenges include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="border flex border-[var(--luxgreen)] p-4 rounded-lg">
            <div>
            <h3 className="font-bold text-gray-800 mb-2">Time Constraints</h3>
            <p className="text-gray-600">
              Many people, especially working professionals and students, struggle to find time for dental visits amidst their busy schedules.
            </p>
            </div>
            <IoTimerOutline className="text-yellow-500 text-5xl ml-4" />
          </div>
          <div className="border flex border-[var(--luxgreen)] p-4 rounded-lg">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Geographical Barriers</h3>
              <p className="text-gray-600">
                People living in remote or underserved areas may lack access to quality dental care, requiring them to travel long distances.
              </p>
            </div>
            <FaMapMarkerAlt className="text-yellow-500 text-4xl ml-4" />
          </div>
          <div className="border flex border-[var(--luxgreen)] p-4 rounded-lg">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Financial Limitations</h3>
              <p className="text-gray-600">
                Dental treatments can be expensive, and many individuals either lack insurance or cannot afford out-of-pocket expenses.
              </p>
            </div>
            <FaMoneyBillWave className="text-yellow-500 text-4xl ml-4" />
          </div>
          <div className="border flex border-[var(--luxgreen)] p-4 rounded-lg">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Limited Awareness</h3>
              <p className="text-gray-600">
                Many people are unaware of the importance of regular dental check-ups and preventive care, leading to neglect until severe problems arise.
              </p>
            </div>
            <FaRegLightbulb className="text-yellow-500 text-4xl ml-4" />
          </div>
        </div>
      </section>
      <section className="mb-12 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Introducing Our <span className="text-yellow-500">On-Site Dental Clinic Program</span>
        </h2>
        <div className="w-full h-[1px] bg-zinc-400 mb-4 " ></div>
        <p className="text-gray-600 mb-6">
          Our On-Site Dental Clinic Program is designed to bridge the gap between individuals and essential dental services by bringing high quality oral care directly to workplaces, educational institutions, corporate offices, and community centers. This initiative is tailored to make dental care accessible, affordable, and convenient for all.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Why On-Site and Why Premium?</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <RxLapTimer className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h4 className="font-bold text-gray-800">Unmatched Convenience</h4>
              <p className="text-gray-600">
                No travel time, no fuss—participants get checked and treated in a single, familiar location.
              </p>
            </div>
          </li>
          <li className="flex items-center">
            <FaRegGem className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h4 className="font-bold text-gray-800">High Engagement</h4>
              <p className="text-gray-600">
                Easy and luxurious access encourages more individuals to seek preventive care, reducing future complications.
              </p>
            </div>
          </li>
          <li className="flex items-center">
            <GiShakingHands className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h4 className="font-bold text-gray-800">Elevated Experience</h4>
              <p className="text-gray-600">
                Our mobile setups boast modern dental chairs, AI scanners, and specialized sterilization protocols that mirror top private clinics.
              </p>
            </div>
          </li>
          <li className="flex items-center">
            <VscLightbulbSparkle className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h4 className="font-bold text-gray-800">Showcase of Innovation</h4>
              <p className="text-gray-600">
                Hosting advanced dental camps highlights your organization as forward-thinking and health-conscious, attracting parents, employees, and stakeholders.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
    </>
  );
};

export default OralHealthCare;
