import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import FirstPage from './Components/FirstPage/FirstPage'
import SecondPage from './Components/SecondPage/SecondPage'
import ThirdPage from './Components/ThirdPage/ThirdPage'
import FourthPage from './Components/FourthPage/FourthPage'
import FifthPage from './Components/FifthPage/FifthPage';
import SixthPage from './Components/SixthPage/SixthPage'
import SeventhPage from './Components/SeventhPage/SeventhPage'
import EighthPage from './Components/EighthPage/EighthPage'
import Footer from './Components/Footer/Footer'
import Faqs from './Components/FAQ/Faqs'
import Lsps from './Components/LuxySmileProgramStructure/Lsps'
import ExclusiveAdvantages from './Components/ExclusiveAdvantages/ExclusiveAdvantages'
import ContactUs from './Components/ContactUs/ContactUs'
import OralHealthCare from './Components/OralHealthCare/OralHealthCare'
import Certificates from './Components/Certificates/Certificates'
import { Analytics } from "@vercel/analytics/react"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom';

const MainContent = () => (
  <>
    <Navbar />
    <FirstPage />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <Certificates />
    <SixthPage />
    <SeventhPage />
    <EighthPage />
    <Footer />
  </>
);

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/lsps" element={<Lsps />} />
        <Route path="/exclusive-advantages" element={<ExclusiveAdvantages />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/oral-health-care" element={<OralHealthCare />} />
      </Routes>
      <Analytics />
    </div>
  );
};

export default App
