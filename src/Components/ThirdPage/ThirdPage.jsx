import React, { useRef, useState } from 'react'
import './ThirdPage.css'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GiMeditation } from "react-icons/gi";
import { PiFlowerLotus } from "react-icons/pi";
import { TfiThought } from "react-icons/tfi";
import { GiVrHeadset } from "react-icons/gi";

const ThirdPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [text, settext] = useState('View More');
    const register = useRef(null);

    // Handle initial and resize display
    React.useEffect(() => {
        const handleDisplay = () => {
            if (!register.current) return;
            const isMobile = window.innerWidth <= 600;
            
            if (isMobile) {
                register.current.style.display = 'none';
            } else {
                register.current.style.cssText = `
                    display: flex;
                    flex-direction: row;
                `;
            }
        };

        handleDisplay();
        window.addEventListener('resize', handleDisplay);
        return () => window.removeEventListener('resize', handleDisplay);
    }, []);
      
    const toggleTiles = () => {
        if (!register.current) return;
        
        const isMobile = window.innerWidth <= 600;
        if (!isMobile) return;

        setIsVisible(!isVisible);
        
        if (!isVisible) {
            register.current.style.cssText = `
                display: flex;
                flex-direction: column;
                margin-top: 2rem;
            `;
            settext('View Less');
        } else {
            register.current.style.display = 'none';
            settext('View More');
        }
    };
        
      
return (
    <div className='thirdpage relative h-screen w-full flex justify-center items-center'>
            <div className='z-[1] absolute h-[95%] w-[97%] rounded-3xl object-cover object-center overflow-hidden'>
                    <img className='w-full h-full' src="Images/bgimg2.png" alt="" />
            </div>

            <div className='z-[2] bgimg h-[95%] w-[97%] rounded-3xl flex flex-col'>
                    <div className='upperdiv flex h-[25%] md:h-[50%] w-full flex-col md:flex-row justify-between items-center p-0 m-0'>
                            <div className='textcontainer flex flex-col items-center md:items-start md:pl-[4vw] gap-[2vh] md:pt-[4vw] w-full md:w-[50%] h-full text-white'>
                                    <div className='tochange1 flex font-light justify-center items-center w-[60%] md:w-fit uppercase gap-[1vh] bg-white/10 backdrop-blur-md p-[1vh] px-[2vh] rounded-full text-[13px] md:text-base mt-4 '>
                                            <HiOutlineArrowLongRight size={25} />
                                            <p>For Organizations</p>
                                    </div>
                                    <p className='thheading text-[25px] md:text-5xl uppercase font-medium text-center md:text-left'>What Sets Us Apart</p>
                                    <p className='thsubheading font-light text-xs md:text-lg tracking-wider'>Transform Wellness. Drive Organizational Success</p>
                            </div>
                            <div className='learnmorediv hidden md:flex flex-col justify-center items-center w-[50%] h-full'>
                                    <button className='w-[30%] h-[12%] ml-[25vw] rounded-full bg-white text-black'>Learn More</button>
                            </div>
                    </div>

                    <div className='lowerdiv h-[53%] md:h-[50%] w-full rounded-b-3xl flex flex-col items-center gap-[1vh]'>
                            <div className='firsthalf h-[47%] flex flex-col md:flex-row justify-center items-center gap-[1vh] px-[2%] w-full'>
                                    <div className='greencard w-full md:w-[47%] h-[25vw] md:h-full rounded-3xl flex flex-col justify-center items-start gap-[1vh] pl-[2vw]'>
                                            <p className='maintext uppercase font-medium text-[15px] md:text-xl tracking-wider text-white'>Boost Organizational Health</p>
                                            <p className='subtext font-light tracking-wide text-white text-[10px] md:text-base'>AI-powered insights help you understand and improve collective habits, reduce absenteeism, and foster a healthier, more productive community.</p>
                                    </div>
                                    <div className='card w-full md:w-[47%] h-max md:h-full flex-row md:flex-col justify-start md:justify-center items-start gap-[1vh] pl-[2vw] rounded-3xl py-[2vw] md:py-0'>
                                            <div className='w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl'><GiMeditation className='icons' size={25} /></div>
                                            <p className='maintext text-[15px] md:text-2xl uppercase tracking-wide'>Customized Wellness Programs</p>
                                    </div>
                            </div>

                            <div ref={register} className='secondhalf flex h-[47%] gap-4 w-full md:flex-row flex-col justify-center items-center px-[2vw] mt-8 md:mt-0'>
                                    <div className='card w-full md:w-[30%] h-[25vw] md:h-full rounded-3xl bg-[var(--luxbg)] flex flex-row md:flex-col justify-start md:justify-center items-start gap-[1vh] pl-[2vw] py-[2vw] md:py-0'>
                                            <div className='w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl ' >< PiFlowerLotus className='icons' size={25} /></div>
                                            <p className=' maintext text-[15px] md:text-2xl uppercase  tracking-wide' >Organization-Wide Analytics</p>
                                    </div>
                                    <div className=' card w-full md:w-[30%] h-[25vw] md:h-full rounded-3xl bg-[var(--luxbg)] flex flex-row md:flex-col justify-start md:justify-center items-start gap-[1vh] pl-[2vw] py-[2vw] md:py-0'>
                                            <div className='w-fit p-[1vh] bg-white rounded-xl  shadow-black shadow-2xl ' ><TfiThought className='icons' size={25} /></div>
                                            <p className=' maintext text-[15px] md:text-2xl uppercase  tracking-wide' >Digital Smile Previews</p>
                                    </div>
                                    <div className=' card w-full md:w-[30%] h-[25vw] md:h-full rounded-3xl bg-[var(--luxbg)] flex flex-row md:flex-col justify-start md:justify-center items-start gap-[1vh] pl-[2vw] py-[2vw] md:py-0'>
                                            <div className='w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl  ' ><GiVrHeadset className='icons' size={25} /></div>
                                            <p className=' maintext text-[15px] md:text-2xl uppercase  tracking-wide' >XR Technology for Comfort</p>
                                    </div>
                            </div>

                            <button onClick={toggleTiles} className='block md:hidden thviewmorebutton bg-white text-black p-[1.5vh] px-[6vh] mt-[1vh] rounded-full w-fit text-sm'>{text}</button>
                    </div>
            </div>
    </div>
)
}

export default ThirdPage