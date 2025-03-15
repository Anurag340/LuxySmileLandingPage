import { FaAward } from "react-icons/fa6";
import { GiBeamsAura } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
const Certificates = () => {
  return (
    <div className=" text-gray-800">
      <main className="p-4 md:p-8 lg:p-16">
        <section className="text-left mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Recognizing Commitment to
            <span className="text-yellow-600"> Oral Health</span>
          </h1>
          <div className="w-full h-[1px] bg-zinc-400 my-8 "></div>
          <p className="mt-4 text-gray-600">
            We believe that organizations committed to oral health deserve recognition for their efforts. To encourage and celebrate exemplary oral care initiatives, we proudly offer certifications and annual wellness awards to institutions that partner with us in fostering better oral hygiene.
          </p>
        </section>
        <section className="mb-8">
          <div className="w-full h-[50vh] object-cover object-center overflow-hidden rounded">
            <img
              src="https://storage.googleapis.com/a1aa/image/VW5yWKQQV5hoRVW7vivsPKH7AZc2tVihg5vyI__tqso.jpg"
              alt="Award trophy on a pedestal"
              className="w-full h-full"
              height="400"
              width="1200"
            />
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl  font-semibold text-gray-800">
            Elite Dental Wellness Certification
          </h2>
          <div className="w-full h-[1px] bg-zinc-400 my-8 "></div>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="w-[50vw] md:w-1/2 rounded h-[50vh] mr-6 object-cover object-center overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/adZCRTBSBlKBeU0vwRoAbffg8KWf7Z_2yNXtJlFpONU.jpg"
              alt="Certificate on a wall with a plant"
              className=" h-full w-full mb-4 md:mb-0 md:mr-4"
            />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed md:w-1/2">
              Every organization that collaborates with LuxySmile for on-site dental clinic services, dental screenings, or wellness camps receives our Elite Dental Wellness Certification. This certification serves as a mark of excellence, acknowledging the institution’s dedication to promoting oral health among its employees, students, or community members. It highlights their commitment to preventive care and ensures their stakeholders benefit from quality dental wellness initiatives.
              <br />
              <br />
              By earning this certification, institutions demonstrate their leadership in corporate or institutional health responsibility, ensuring their members receive the best oral care solutions. This recognition sets them apart as pioneers in prioritizing dental wellness, improving not just oral hygiene but also overall productivity and well-being. The Elite Dental Wellness Certification is more than just an acknowledgment—it is a symbol of trust, care, and a healthier future.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl md:text-3xl  font-semibold text-gray-800">
            Why Recognition Matters?
          </h2>
          <div className="w-full flex justify-center items-center mt-10" >
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 w-3/4 ">
            <div className="flex flex-col justify-center items-center p-4 border  border-zinc-300 rounded-tl-3xl w-full h-72">
              <FaAward className="text-yellow-600 text-4xl mb-4" />
              <p className="text-center text-gray-600 w-[50%] ">
                Enhances the organization’s reputation as a health-conscious institution.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 border  border-zinc-300 rounded-tr-3xl w-full h-72">
              <GiBeamsAura className="text-yellow-600 text-4xl mb-4" />
              <p className="text-center text-gray-600 w-[50%]">
                Boosts employee and student morale by emphasizing well-being.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 border  border-zinc-300 rounded-bl-3xl w-full h-72">
              <FaHandHoldingMedical className="text-yellow-600 text-4xl mb-4" />
              <p className="text-center text-gray-600 w-[50%]">
                Serves as a valuable credential in corporate and institutional wellness programs.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 border border-zinc-300 rounded-br-3xl w-full h-72">
              <FaHandHoldingHeart className="text-yellow-600 text-4xl mb-4" />
              <p className="text-center text-gray-600 w-[50%]">
                Demonstrates social responsibility and commitment to holistic healthcare.
              </p>
            </div>
          </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Certificates;