import React, { useRef, useEffect } from 'react';
import './SeventhPage.css';
import { ImQuotesLeft } from "react-icons/im";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const SeventhPage = () => {
  const commentDivRef = useRef(null);

  const scrollLeft = () => {
    if (commentDivRef.current) {
      const sliderWidth = commentDivRef.current.querySelector('.slider').offsetWidth * 1.05; // Increase by 10%
      commentDivRef.current.scrollBy({ left: -sliderWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (commentDivRef.current) {
      const sliderWidth = commentDivRef.current.querySelector('.slider').offsetWidth * 1.05; // Increase by 10%
      commentDivRef.current.scrollBy({ left: sliderWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (commentDivRef.current) {
        const sliderWidth = commentDivRef.current.querySelector('.slider').offsetWidth * 1.048; // Increase by 10%
        const scrollPosition = commentDivRef.current.scrollLeft;
        const maxScroll = commentDivRef.current.scrollWidth - commentDivRef.current.clientWidth;

        if (scrollPosition >= maxScroll) {
          commentDivRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          commentDivRef.current.scrollBy({ left: sliderWidth, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='seventhpage min-h-screen w-full flex flex-col gap-[4vw] md:gap-[4vw] justify-center items-center px-4 md:px-0 py-8 md:py-0'>
        <div className='svtextdiv flex flex-col justify-center items-start gap-[2vh]'>
            <p className='seventhmaintext text-3xl md:text-5xl uppercase font-medium text-center w-full'>What Our <span>Client Say’s</span></p>
            <p className='seventhsubtext text-base md:text-lg font-light text-center w-full'>Lorem ipsum dolor sit amet consectetur. Sed nisl duis egestas magna pharetra</p>
        </div>

        <div ref={commentDivRef} className='commentdiv w-[90%] md:w-[60%] h-auto md:h-[40%] svimgdiv overflow-x-auto flex justify-start items-center gap-[4vw] md:gap-[2vw] pb-4'>
            <div className='slider h-full min-w-[100%] md:min-w-[30%] rounded-2xl flex flex-col gap-[2vh] md:gap-[1vh] justify-center items-start p-[4vw] md:p-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={25} />
                <p className='slidermaintext text-sm md:text-base font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-auto md:h-[20%] flex justify-start items-center gap-[3vw] md:gap-[1vw] mt-2'>
                    <div className='svimg h-[10vw] w-[10vw] md:h-[3vw] md:w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person1.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-xs md:text-sm'>Roger Donin</p>
                        <p className='text-[10px] md:text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
            <div className='slider h-full min-w-[100%] md:min-w-[30%] rounded-2xl flex flex-col gap-[2vh] md:gap-[1vh] justify-center items-start p-[4vw] md:p-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={25} />
                <p className='slidermaintext text-sm md:text-base font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-auto md:h-[20%] flex justify-start items-center gap-[3vw] md:gap-[1vw] mt-2'>
                    <div className='svimg h-[10vw] w-[10vw] md:h-[3vw] md:w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person2.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-xs md:text-sm'>Roger Donin</p>
                        <p className='text-[10px] md:text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
            <div className='slider h-full min-w-[100%] md:min-w-[30%] rounded-2xl flex flex-col gap-[2vh] md:gap-[1vh] justify-center items-start p-[4vw] md:p-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={25} />
                <p className='slidermaintext text-sm md:text-base font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-auto md:h-[20%] flex justify-start items-center gap-[3vw] md:gap-[1vw] mt-2'>
                    <div className='svimg h-[10vw] w-[10vw] md:h-[3vw] md:w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person3.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-xs md:text-sm'>Roger Donin</p>
                        <p className='text-[10px] md:text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
            <div className='slider h-full min-w-[100%] md:min-w-[30%] rounded-2xl flex flex-col gap-[2vh] md:gap-[1vh] justify-center items-start p-[4vw] md:p-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={25} />
                <p className='slidermaintext text-sm md:text-base font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-auto md:h-[20%] flex justify-start items-center gap-[3vw] md:gap-[1vw] mt-2'>
                    <div className='svimg h-[10vw] w-[10vw] md:h-[3vw] md:w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person1.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-xs md:text-sm'>Roger Donin</p>
                        <p className='text-[10px] md:text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
            <div className='slider h-full min-w-[100%] md:min-w-[30%] rounded-2xl flex flex-col gap-[2vh] md:gap-[1vh] justify-center items-start p-[4vw] md:p-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={25} />
                <p className='slidermaintext text-sm md:text-base font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-auto md:h-[20%] flex justify-start items-center gap-[3vw] md:gap-[1vw] mt-2'>
                    <div className='svimg h-[10vw] w-[10vw] md:h-[3vw] md:w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person1.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-xs md:text-sm'>Roger Donin</p>
                        <p className='text-[10px] md:text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
        </div>
        

        <div className='flex gap-[2vh] justify-center items-center mt-4 md:mt-0'>
            <button onClick={scrollLeft} className='p-[.8vh] md:p-[.6vh] px-[2vh] bg-white rounded-full'><LiaLongArrowAltLeftSolid size={16} /></button>
            <button onClick={scrollRight} className='p-[.8vh] md:p-[.6vh] px-[2vh] bg-white rounded-full'><LiaLongArrowAltRightSolid size={16} /></button>
        </div>
    </div>
  );
};

export default SeventhPage;