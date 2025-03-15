import React, { useRef, useEffect, useState } from 'react';
import Cards from './Cards';
import './SecondPage.css';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";

const SecondPage = () => {
  const cardContainerRef = useRef(null);
  const commentContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && cardContainerRef.current) {
        const cardWidth = cardContainerRef.current.firstChild.offsetWidth;
        const newScrollPosition = cardContainerRef.current.scrollLeft + cardWidth;
        
        if (newScrollPosition >= cardContainerRef.current.scrollWidth - cardContainerRef.current.clientWidth) {
          cardContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          cardContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 2500); // Change slide every 2.5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className='secondpage min-h-screen w-full flex flex-col justify-center items-center gap-[4vh] py-8 md:py-0 md:h-screen'>
        <p className='scherotext text-3xl md:text-5xl uppercase text-center px-4'>The <span>LuxySmile</span> Vision</p>
        <p className='scsubtext w-[90%] md:w-[70%] text-lg md:text-xl text-center'>We believe oral health is integral to overall wellness and organizational success. <span className='italic font-medium'>LuxySmile</span> partners directly with institutions and corporates to deliver seamless, expert Oral care that boosts confidence, enhances productivity, and provides actionable health insights.</p>

        <div className='scpagebar w-[50%] md:w-[30%] h-[4px] flex justify-center items-center'>
            <div className='h-[4px] w-[4px] bg-zinc-700 rounded-full'></div>
            <div className='h-[1px] w-full bg-zinc-700'></div>
            <div className='h-[4px] w-[4px] bg-zinc-700 rounded-full'></div>
        </div>

        <div className='flex flex-col md:flex-row w-[90%] md:w-[70%] gap-4 md:gap-0'>
            <div className='flex flex-col items-center md:items-start gap-[2vh] w-full md:w-[90%] text-center md:text-left'>
                <p className='heroheading text-2xl md:text-4xl uppercase'>Innovation and <span>Technology</span></p>
                <p className='subheading'>At LuxySmile, we combine innovation and care to deliver impactful, actionable solutions</p>
            </div>
            <div className='flex flex-row md:flex-col justify-center md:justify-end items-center w-full md:w-[10%]'>
                <div className='flex justify-center items-center gap-[2vh]'>
                    <button className='p-[.5vh] px-[2vh] bg-white rounded-full' onClick={() => scrollLeft(cardContainerRef)}><HiOutlineArrowLongLeft/></button>
                    <button className='p-[.5vh] px-[2vh] bg-white rounded-full' onClick={() => scrollRight(cardContainerRef)}><HiOutlineArrowLongRight/></button>
                </div>
            </div>
        </div>

        <div 
          className='cardcontainer  flex justify-start items-center md:gap-[3vw] w-full md:w-[80%] h-[40vh] md:h-[48%] overflow-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory' 
          ref={cardContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            {carddata.map((card, index) => (
                <div key={index} className="min-w-full md:min-w-[30%] snap-center">
                    <Cards data={card} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default SecondPage;