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



const App = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar />
    <FirstPage />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <FifthPage />
    <SixthPage />
    <SeventhPage />
    <EighthPage />
    <Footer />
  </div>
  )
}

export default App
