import React, { useRef } from 'react';
import Cards from './Cards';
import './SecondPage.css';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";

const SecondPage = () => {
  const cardContainerRef = useRef(null);
  const commentContainerRef = useRef(null);

  const carddata = [{img:"Images/cardimg1.png",des1:"AI Oral Checkup Kiosk",des2:"24/7 access to on-site diagnostics and consultations, ensuring continuous care availability."},{img:"Images/cardimg2.png",des1:"Organization-Wide Analytics",des2:""},{img:"Images/cardimg3.png",des1:"Mobile App and Dashboards",des2:""},{img:"Images/cardimg4.png",des1:"Digital Smile Previews",des2:""},{img:"Images/cardimg5.png",des1:"XR Technology for Comfort",des2:""}];

  const scrollLeft = (ref) => {
    if (ref.current) {
      const cardWidth = ref.current.firstChild.offsetWidth;
      ref.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      const cardWidth = ref.current.firstChild.offsetWidth;
      ref.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className='secondpage h-screen w-full flex flex-col justify-center items-center gap-[6vh]'>
        <p className='scherotext text-5xl uppercase'>The <span>LuxySmile</span> Vision</p>
        <p className='scsubtext w-[70%] text-xl'>We believe oral health is integral to overall wellness and organizational success. <span className='italic font-medium'>LuxySmile</span> partners directly with institutions and corporates to deliver seamless, expert Oral care that boosts confidence, enhances productivity, and provides actionable health insights.</p>

        <div className='scpagebar w-[30%] h-[4px] flex justify-center items-center'>
            <div className='h-[4px] w-[4px] bg-zinc-700 rounded-full'></div>
            <div className='h-[1px] w-full bg-zinc-700'></div>
            <div className='h-[4px] w-[4px] bg-zinc-700 rounded-full'></div>
        </div>

        <div className='flex w-[70%]'>
            <div className='flex flex-col items-start gap-[2vh] w-[90%]'>
                <p className='heroheading text-4xl uppercase'>Innovation and <span>Technology</span></p>
                <p className='subheading'>At LuxySmile, we combine innovation and care to deliver impactful, actionable solutions</p>
            </div>
            <div className='flex flex-col justify-end items-center w-[10%]'>
                <div className='flex justify-center items-center gap-[2vh]'>
                    <button className='p-[.5vh] px-[2vh] bg-white rounded-full' onClick={() => scrollLeft(cardContainerRef)}><HiOutlineArrowLongLeft/></button>
                    <button className='p-[.5vh] px-[2vh] bg-white rounded-full' onClick={() => scrollRight(cardContainerRef)}><HiOutlineArrowLongRight/></button>
                </div>
            </div>
        </div>

        <div className='cardcontainer flex justify-start items-center gap-[3vw] w-[80%] h-[48%] overflow-auto overflow-y-hidden ' ref={cardContainerRef}>
          {carddata.map((card, index) => (
            <Cards data={card} key={index} />
          ))}
        </div>
    </div>
  );
};

export default SecondPage;