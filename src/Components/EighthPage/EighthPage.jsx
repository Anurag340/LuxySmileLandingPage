import React, { useRef, useState } from 'react'
import './EighthPage.css'
import { CiCirclePlus } from "react-icons/ci";

const EighthPage = () => {
            const [isVisible1, setIsVisible1] = useState(false);
            const [text1,settext1] = useState('CiCirclePlus');
            const register1 = useRef(null);
          
            const toggleTile1 = () => {
                if (isVisible1) {
                    register1.current.style.display = 'none'; // Hide the section
                    settext1('CiCirclePlus'); // Update the button text
                } else {
                    register1.current.style.display = 'block'; // Show the section
                    settext1('CiCircleMinus'); // Update the button text
                }
                setIsVisible1(!isVisible1); // Toggle the state
                document.getElementById('button1').classList.toggle('rotate-45'); // Rotate the button
            };
            const [isVisible2, setIsVisible2] = useState(false);
            const [text2,settext2] = useState('CiCirclePlus');
            const register2 = useRef(null);
          
            const toggleTile2 = () => {
                if (isVisible2) {
                    register2.current.style.display = 'none'; // Hide the section
                    settext2('CiCirclePlus'); // Update the button text
                } else {
                    register2.current.style.display = 'block'; // Show the section
                    settext2('CiCircleMinus'); // Update the button text
                }
                setIsVisible2(!isVisible2); // Toggle the state
                document.getElementById('button2').classList.toggle('rotate-45'); // Rotate the button
            };
            const [isVisible3, setIsVisible3] = useState(false);
            const [text3,settext3] = useState('CiCirclePlus');
            const register3 = useRef(null);
          
            const toggleTile3 = () => {
                if (isVisible3) {
                    register3.current.style.display = 'none'; // Hide the section
                    settext3('CiCirclePlus'); // Update the button text
                } else {
                    register3.current.style.display = 'block'; // Show the section
                    settext3('CiCircleMinus'); // Update the button text
                }
                setIsVisible3(!isVisible3); // Toggle the state
                document.getElementById('button3').classList.toggle('rotate-45'); // Rotate the button
            };
            const [isVisible4, setIsVisible4] = useState(false);
            const [text4,settext4] = useState('CiCirclePlus');
            const register4 = useRef(null);
          
            const toggleTile4 = () => {
                if (isVisible4) {
                    register4.current.style.display = 'none'; // Hide the section
                    settext4('CiCirclePlus'); // Update the button text
                } else {
                    register4.current.style.display = 'block'; // Show the section
                    settext4('CiCircleMinus'); // Update the button text
                }
                setIsVisible4(!isVisible4); // Toggle the state
                document.getElementById('button4').classList.toggle('rotate-45'); // Rotate the button
            };
            const [isVisible5, setIsVisible5] = useState(false);
            const [text5,settext5] = useState('CiCirclePlus');
            const register5 = useRef(null);
          
            const toggleTile5 = () => {
                if (isVisible5) {
                    register5.current.style.display = 'none'; // Hide the section
                    settext5('CiCirclePlus'); // Update the button text
                } else {
                    register5.current.style.display = 'block'; // Show the section
                    settext5('CiCircleMinus'); // Update the button text
                }
                setIsVisible5(!isVisible5); // Toggle the state
                document.getElementById('button5').classList.toggle('rotate-45'); // Rotate the button
            };
            const [isVisible6, setIsVisible6] = useState(false);
            const [text6,settext6] = useState('CiCirclePlus');
            const register6 = useRef(null);
          
            const toggleTile6 = () => {
                if (isVisible6) {
                    register6.current.style.display = 'none'; // Hide the section
                    settext6('CiCirclePlus'); // Update the button text
                } else {
                    register6.current.style.display = 'block'; // Show the section
                    settext6('CiCircleMinus'); // Update the button text
                }
                setIsVisible6(!isVisible6); // Toggle the state
                document.getElementById('button6').classList.toggle('rotate-45'); // Rotate the button
            };
  return (
    <div id='eight' className='relative min-h-screen w-full flex justify-center items-center py-8 px-4 md:p-0' >
        <div className='relative h-[95%] w-[97%] pb-6 rounded-3xl overflow-hidden' >
            <div className='absolute inset-0 z-[1]'>
                <img className='h-full w-full object-cover' src="Images/bgimg4.png" alt="" />
            </div>
            <div className='absolute inset-0 z-[2] eighthbg'></div>
            <div className='relative z-[3] h-full w-full flex flex-col items-center pt-[6vw] md:pt-[4vw] px-[4vw] md:px-[3vw] gap-[4vw] md:gap-[2vw]' >
                <div className='flex flex-col justify-center items-center gap-[2vh] text-center' >
                    <p className='eighthherotext text-3xl md:text-6xl font-medium text-white uppercase' >Frequently Asked Question</p>
                    <p className='eighthsubtext text-base md:text-lg font-light text-white px-4' >LuxySmile partnerships go beyond care to deliver recognition:</p>
                </div>

                <div className='querycontainer w-full h-auto md:h-[35%] bg-white/10 backdrop-blur-lg text-white rounded-2xl py-[4vw] md:py-[1vw] px-[4vw] md:px-[2vw] mb-[3vh] md:mb-[1vh]' >
                    <p className='eighthcardtext uppercase text-xl md:text-2xl' >For Individuals and</p>
                    <p className='eighthcardtext uppercase text-xl md:text-2xl'>Families</p>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='flex mb-[1vh]' >
                            <div className='flex flex-col w-[90%] md:w-[95%]' >
                                <p className='ques text-sm md:text-base'>What is on-site dental wellness?</p>
                                <p ref={register1} className='ans hidden text-xs md:text-sm font-light mt-2' >On-site dental wellness brings professional dental care directly to your location, eliminating the need for travel.</p>
                            </div>
                            <button id="button1" onClick={toggleTile1} className='text-white' ><CiCirclePlus size={25} /></button>
                        </div>
                        <div className='flex  mb-[1vh]' >
                            <div className='flex flex-col  w-[95%] ' >
                                <p className='ques'>What treatments are offered on-site?</p>
                                <p ref={register2}  className='hidden ans text-sm font-light' >On-site dental wellness brings professional dental care directly to your location, eliminating the need for travel.</p>
                            </div>
                            <button id="button2" onClick={toggleTile2} className='text-white' ><CiCirclePlus size={25} /></button>

                        </div>
                        <div className='flex  mb-[1vh]' >
                            <div className='flex flex-col  w-[95%] ' >
                                <p className='ques'>Are the materials and equipment safe?</p>
                                <p ref={register3} className='hidden ans text-sm font-light' >Absolutely. We use FDA-approved materials and state-of-the-art portable equipment to ensure safety and precision.</p>
                            </div>
                            <button id="button3" onClick={toggleTile3} className='text-white' ><CiCirclePlus size={25} /></button>

                        </div>
                    </div>
                </div>

                <div className='querycontainer w-full h-auto md:h-[35%] bg-white/10 backdrop-blur-lg text-white rounded-2xl py-[4vw] md:py-[1vw] px-[4vw] md:px-[2vw]' >
                    <p className='eighthcardtext uppercase text-xl md:text-2xl'>For Organizations </p>
                    <p className='eighthcardtext uppercase text-xl md:text-2xl'>and Institutions</p>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='flex mb-[1vh]' >
                            <div className='flex flex-col w-[90%] md:w-[95%]' >
                                <p className='ques text-sm md:text-base'>How can my organization partner with LuxySmile?</p>
                                <p ref={register4} className='ans hidden text-xs md:text-sm font-light mt-2' >On-site dental wellness brings professional dental care directly to your location, eliminating the need for travel.</p>
                            </div>
                            <button id="button4" onClick={toggleTile4} className='text-white' ><CiCirclePlus size={25} /></button>
                        </div>
                        <div className='flex  mb-[1vh]' >
                            <div className='flex flex-col  w-[95%] ' >
                                <p className='ques'>What are the benefits of partnering with LuxySmile?</p>
                                <p ref={register5} className='hidden ans text-sm font-light' >On-site dental wellness brings professional dental care directly to your location, eliminating the need for travel.</p>
                            </div>
                            <button id="button5" onClick={toggleTile5} className='text-white' ><CiCirclePlus size={25} /></button>

                        </div>
                        <div className='flex  mb-[1vh]' >
                            <div className='flex flex-col  w-[95%] ' >
                                <p className='ques'>Is there a minimum number of participants required?</p>
                                <p ref={register6} className='hidden ans text-sm font-light' >On-site dental wellness brings professional dental care directly to your location, eliminating the need for travel.</p>
                            </div>
                            <button id="button6" onClick={toggleTile6} className='text-white' ><CiCirclePlus size={25} /></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EighthPage