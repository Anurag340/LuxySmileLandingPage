import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { HiUserGroup } from "react-icons/hi2";
import { TbUsersGroup } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { CgSmartphoneChip } from "react-icons/cg";
const ExclusiveAdvantages = () => (
    <>
    <Navbar />
    <main className="container mt-40 mx-auto px-6">
        <div className="relative object-cover z-0 object-center overflow-hidden h-[55vh] w-full mt-[8vh] rounded-3xl" style={{ position: 'relative' }}>
            <img className="h-full w-full z-0" src="Images/bgimg2.png" alt="" />
            <div className="absolute bottom-0 right-0 bg-[var(--luxbg)] text-sm md:text-3xl tracking-wider font-bold rounded-tl-3xl z-10 text-[var(--luxgreen)] h-[20vh] w-[30vw] pl-[2vh] pt-[2vh]" >
                <p><span className="text-[var(--luxyellow)]">Exclusive Advantages</span> for</p>
                <p>Your Institution</p>
            </div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 p-6">
                <h1 className="text-3xl font-bold text-white">Exclusive Advantages for <span className="text-yellow-500">Your Institution</span></h1>
            </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            <div className="flex flex-col items-center">
                <HiUserGroup className="text-4xl text-[var(--luxgreen)]" />
                <p className="mt-2 text-gray-700">Prestige & Parent/Staff Confidence</p>
            </div>
            <div className="flex flex-col items-center">
                <TbUsersGroup className="text-4xl text-[var(--luxgreen)]" />
                <p className="mt-2 text-gray-700">Convenience Equals Higher Participation</p>
            </div>
            <div className="flex flex-col items-center">
                <GiMoneyStack className="text-4xl text-[var(--luxgreen)]" />
                <p className="mt-2 text-gray-700">Potential Revenue & Cost Offsets</p>
            </div>
            <div className="flex flex-col items-center">
                <FaAward className="text-4xl text-[var(--luxgreen)]" />
                <p className="mt-2 text-gray-700">Award Recognition & Certifications</p>
            </div>
            <div className="flex flex-col items-center">
                <CgSmartphoneChip className="text-4xl text-[var(--luxgreen)]" />
                <p className="mt-2 text-gray-700">Complimentary OraScan Pro AI Kiosk</p>
            </div>
        </div>
        <div className="h-[1px] w-full bg-zinc-400 my-[8vh]  " >

        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-[var(--luxlightgray)] p-6 rounded-tl-3xl shadow-md h-fit flex flex-col">
                    <div className="flex flex-col items-start mb-4">
                        <div className="w-full flex justify-start mb-2">
                            <HiUserGroup className="text-4xl text-[var(--luxgreen)]" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800">Prestige & Parent/Staff Confidence</h2>
                    </div>
                    <p className="text-gray-600 text-sm text-left">Hosting an on-site premium dental experience enhances your brand, showcasing excellence in well-being and modern healthcare.</p>
                </div>
                <div className="bg-[var(--luxlightgray)] p-6 rounded-tr-3xl shadow-md h-fit flex flex-col">
                    <div className="flex flex-col items-start mb-4">
                        <div className="w-full flex justify-start mb-2">
                            <TbUsersGroup className="text-4xl text-[var(--luxgreen)]" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800">Convenience Equals Higher Participation</h2>
                    </div>
                    <p className="text-gray-600 text-sm text-left">No traffic delays or scheduling hassles—convenient care encourages early oral health action.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[var(--luxlightgray)] p-6 rounded-bl-3xl shadow-md h-fit flex flex-col">
                    <div className="flex flex-col items-start mb-4">
                        <div className="w-full flex justify-start mb-2">
                            <GiMoneyStack className="text-4xl text-[var(--luxgreen)]" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800">Potential Revenue & Cost Offsets</h2>
                    </div>
                    <p className="text-gray-600 text-sm text-left">We provide a fee for treatments, covering utilities with transparent support.</p>
                </div>
                <div className="bg-[var(--luxlightgray)] p-6 shadow-md h-fit flex flex-col">
                    <div className="flex flex-col items-start mb-4">
                        <div className="w-full flex justify-start mb-2">
                            <FaAward className="text-4xl text-[var(--luxgreen)]" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800">Award Recognition & Certifications</h2>
                    </div>
                    <p className="text-gray-600 text-sm text-left">Gain national recognition with Oralen Healthcare's excellence award and a Premium Oral Care Certification.</p>
                </div>
                <div className="bg-[var(--luxlightgray)] p-6 rounded-br-3xl shadow-md h-fit flex flex-col">
                    <div className="flex flex-col items-start mb-4">
                        <div className="w-full flex justify-start mb-2">
                            <CgSmartphoneChip className="text-4xl text-[var(--luxgreen)]" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800">Complimentary OraScan Pro AI Kiosk</h2>
                    </div>
                    <p className="text-gray-600 text-sm text-left">Stand out as an AI-driven, future-ready healthcare leader with 24/7 oral scans and telemedicine access.</p>
                </div>
            </div>
        </div>
        <Footer />
    </main>
    </>
);

export default ExclusiveAdvantages