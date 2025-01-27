import React, { useRef, useState } from 'react'
import './FourthPage.css'
import { GiVrHeadset } from 'react-icons/gi'

const FourthPage = () => {
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
    <div className=' fourthmaindiv flex h-screen w-full ' >
        <div className='fourthtextdiv  w-[40%] h-full pl-[4vw] pt-[3vw] flex flex-col  gap-[2vh] ' >
            <div className=' textdiv flex flex-col justify-center items-start gap-[1vh]' >
                <p className=' fourthmaintext uppercase text-4xl font-medium ' >Individuals</p>
                <p className=' fourthsubtext text-lg font-light tracking-wide' >Personalized Insights. Accessible Anytime.</p>
            </div>
            <p className='text-3xl fourthsub2text ' >Empowering healthier <span>lifestyles</span>-one <span>individual</span> at a time.</p>

        </div>
        <div className=' carddiv w-[60%] h-full flex flex-col items-center gap-[1vh] pt-[1vw] pb-[1vw] ' >
            <div className=' cards w-[65%] h-fit pb-[2vw] bg-white rounded-3xl pl-[2vw] pt-[2vh]  ' >
                <div className=' icondiv w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl  ' ><GiVrHeadset className='icons' size={25} /></div>
                <div>
                <p className='cardmaintext uppercase font-medium tracking-wide' >AI-Powered Diagnostics</p>
                <p className='cardsmtext text-sm font-light' >Advanced analytics ensure precise, effective care tailored to each individual’s needs.</p>
                </div>

            </div>
            <div className=' cards w-[65%] h-fit pb-[2vw] bg-white rounded-3xl pl-[2vw] pt-[2vh]  ' >
                <div className=' icondiv w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl  ' ><GiVrHeadset className='icons' size={25} /></div>
               <div>
               <p className='cardmaintext uppercase font-medium tracking-wide' >Health Records at Your Fingertips</p>
               <p className=' cardsmtext text-sm font-light'>Every student or staff member gains access to their personalized health reports via our secure mobile app and web-based dashboards.</p>
               </div>
            </div>
            <div className=' cards w-[65%] h-fit pb-[2vw] bg-white rounded-3xl pl-[2vw] pt-[2vh]  ' >
                <div className=' icondiv w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl  ' ><GiVrHeadset className='icons' size={25} /></div>
               <div>
               <p className='cardmaintext uppercase font-medium tracking-wide' >Digital Smile Previews</p>
               <p className=' cardsmtext text-sm font-light'>Individuals can visualize their post-treatment smiles, fostering trust and confidence in their care.</p>
               </div>
            </div>


            <div className='flex flex-col justify-center items-center gap-[1vh] w-full hidden ' ref={register} >
            <div  className=' cards w-[65%] h-fit pb-[2vw] bg-white rounded-3xl pl-[2vw] pt-[2vh]  ' >
                <div className=' icondiv w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl  ' ><GiVrHeadset className='icons' size={25} /></div>
               <div>
               <p className='cardmaintext uppercase font-medium tracking-wide' >Preventive Care and Guidance</p>
               <p className=' cardsmtext text-sm font-light'>Our app and dashboards provide real-time updates and actionable advice to improve oral health, tailored to each individual.</p>
               </div>
            </div>
            <div className=' cards w-[65%] h-fit pb-[2vw] bg-white rounded-3xl pl-[2vw] pt-[2vh]  ' >
                <div className=' icondiv w-fit p-[1vh] bg-white rounded-xl shadow-black shadow-2xl  ' ><GiVrHeadset className='icons' size={25} /></div>
               <div>
               <p className='cardmaintext uppercase font-medium tracking-wide' >No Disruptions</p>
               <p className=' cardsmtext text-sm font-light'>On-site services eliminate travel and waiting times, seamlessly integrating into your organization’s schedule.</p>
               </div>
            </div>
            </div>
            <button onClick={toggleTiles} className='p-[1.2vh] px-[4vw] shadow-black shadow-2xl showmorebutton text-white rounded-full ' >{text}</button>


        </div>

    </div>
  )
}

export default FourthPage