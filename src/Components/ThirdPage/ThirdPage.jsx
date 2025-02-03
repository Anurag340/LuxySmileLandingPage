import React, { useRef, useState } from 'react'
import './ThirdPage.css'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GiMeditation } from "react-icons/gi";
import { PiFlowerLotus } from "react-icons/pi";
import { TfiThought } from "react-icons/tfi";
import { GiVrHeadset } from "react-icons/gi";

const ThirdPage = () => {
        const [isVisible, setIsVisible] = useState(false);
        const [text,settext] = useState('View More');
        const register = useRef(null);
      
        const toggleTiles = () => {
            if (isVisible) {
                register.current.style.display = 'none'; // Hide the section
                settext('View More'); // Update the button text
            } else {
                register.current.style.display = 'flex'; // Show the section
                settext('View Less'); // Update the button text
            }
            setIsVisible(!isVisible); // Toggle the state
        };
        
      
  return (
    <div className=' relative h-screen w-full flex justify-center items-center ' >
        <div className='z-[1] absolute h-[95%] w-[97%] rounded-3xl object-cover object-center overflow-hidden  ' >
            <img className='w-full h-full ' src="Images/bgimg2.png" alt="" />
        </div>

        <div className= ' z-[2] bgimg h-[95%] w-[97%] rounded-3xl flex flex-col ' >
            <div className=' upperdiv flex h-[50%] w-full justify-between items-center'>
                <div className=' textcontainer flex flex-col  items-start pl-[4vw] gap-[2vh] pt-[4vw] w-[50%] h-full text-white ' >
                    <div className=' tochange1 flex font-light justify-center items-center w-fit uppercase gap-[1vh] bg-white/10 backdrop-blur-md  p-[1vh] px-[2vh] rounded-full ' ><HiOutlineArrowLongRight size={25} /><p>For Organizations</p></div>
                    <p className=' thheading text-5xl uppercase font-medium ' >What Sets Us Apart</p>
                    <p className=' thsubheading font-light text-lg tracking-wider' >Transform Wellness. Drive Organizational Success</p>
                </div>
                <div className=' learnmorediv flex flex-col justify-center items-center w-[50%] h-full ' >
                    <button className='w-[30%] h-[12%] ml-[25vw] rounded-full bg-white text-black ' >Learn More</button>

                </div>
            </div>

            <div className=' lowerdiv h-[50%] w-full rounded-b-3xl flex flex-col items-center gap-[1vh] '>
                <div className=' firsthalf h-[47%] flex justify-center items-center gap-[1vh] px-[2%] w-full' >
                    <div className=' greencard w-[47%] h-full rounded-3xl flex flex-col justify-center items-start gap-[1vh] pl-[2vw] '>
                        <p className=' maintext uppercase font-medium text-xl tracking-wider text-white' >Boost Organizational Health</p>
                        <p className=' subtext font-light  tracking-wide text-white' >AI-powered insights help you understand and improve collective habits, reduce absenteeism, and foster a healthier, more productive community.</p>
                    </div>
                    <div className=' card w-[47%] h-full flex flex-col justify-center items-start gap-[1vh] pl-[2vw] rounded-3xl '>
                        <div className='w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl ' ><GiMeditation className='icons' size={25} /></div>
                        <p className=' maintext text-2xl uppercase  tracking-wide' >Customized Wellness Programs</p>
                    </div>

                </div>
                <div ref={register}  className='secondhalf h-[47%] gap-[1vh] w-full flex justify-center items-center' >

                    <div className='  card w-[30%] h-full rounded-3xl bg-blue-700 flex flex-col justify-center items-start gap-[1vh] pl-[2vw] '>
                        <div className='w-fit p-[1vh] bg-white rounded-xl  shadow-black shadow-2xl ' >< PiFlowerLotus className='icons' size={25} /></div>
                        <p className=' maintext text-2xl uppercase  tracking-wide' >Organization-Wide Analytics</p>
                    </div>
                    <div className=' card w-[30%] h-full rounded-3xl bg-blue-700 flex flex-col justify-center items-start gap-[1vh] pl-[2vw] '>
                        <div className='w-fit p-[1vh] bg-white rounded-xl  shadow-black shadow-2xl ' ><TfiThought className='icons' size={25} /></div>
                        <p className=' maintext text-2xl uppercase  tracking-wide' >Digital Smile Previews</p>
                    </div>
                    <div className=' card w-[30%] h-full rounded-3xl bg-blue-700 flex flex-col justify-center items-start gap-[1vh] pl-[2vw] '>
                        <div className='w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl  ' ><GiVrHeadset className='icons' size={25} /></div>
                        <p className=' maintext text-2xl uppercase  tracking-wide' >XR Technology for Comfort</p>
                    </div>

                </div>

                <button onClick={toggleTiles}  className='hidden thviewmorebutton bg-white text-black p-[1.5vh] px-[6vh] mt-[1vh] rounded-full w-fit text-sm  ' >{text}</button>

            </div>


        </div>


    </div>
  )
}

export default ThirdPage