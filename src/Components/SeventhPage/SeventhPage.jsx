import React, { useRef } from 'react';
import './SeventhPage.css';
import { ImQuotesLeft } from "react-icons/im";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const SeventhPage = () => {
  const commentDivRef = useRef(null);

  const scrollLeft = () => {
    if (commentDivRef.current) {
      const sliderWidth = commentDivRef.current.querySelector('.slider').offsetWidth;
      commentDivRef.current.scrollBy({ left: -sliderWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (commentDivRef.current) {
      const sliderWidth = commentDivRef.current.querySelector('.slider').offsetWidth;
      commentDivRef.current.scrollBy({ left: sliderWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className='seventhpage h-screen w-full flex flex-col gap-[4vw] justify-center items-center'>
        <div className='svtextdiv flex flex-col justify-center items-start gap-[2vh]'>
            <p className='seventhmaintext text-5xl uppercase font-medium'>What Our <span>Client Say’s</span></p>
            <p className='seventhsubtext text-lg font-light'>Lorem ipsum dolor sit amet consectetur. Sed nisl duis egestas magna pharetra</p>
        </div>

        <div ref={commentDivRef} className='commentdiv w-[60%] h-[40%] svimgdiv overflow-x-auto flex justify-start items-center gap-[2vw]'>
            <div className='slider h-full min-w-[35%] rounded-2xl flex flex-col gap-[1vh] justify-center items-start px-[2vw] py-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={30} />
                <p className='slidermaintext  font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-[20%] flex justify-start items-center gap-[1vw]'>
                    <div className='svimg h-[3vw] w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person1.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-sm'>Roger Donin</p>
                        <p className='text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
            <div className='slider h-full  min-w-[35%] rounded-2xl flex flex-col gap-[1vh] justify-center items-start px-[2vw] py-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={30} />
                <p className='slidermaintext  font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-[20%] flex justify-start items-center gap-[1vw]'>
                    <div className='svimg h-[3vw] w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person2.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-sm'>Roger Donin</p>
                        <p className='text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
            <div className='slider h-full min-w-[35%] rounded-2xl flex flex-col gap-[1vh] justify-center items-start px-[2vw] py-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={30} />
                <p className='slidermaintext  font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-[20%] flex justify-start items-center gap-[1vw]'>
                    <div className='svimg h-[3vw] w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person3.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-sm'>Roger Donin</p>
                        <p className='text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
            <div className='slider h-full  min-w-[35%] rounded-2xl flex flex-col gap-[1vh] justify-center items-start px-[2vw] py-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={30} />
                <p className='slidermaintext font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-[20%] flex justify-start items-center gap-[1vw]'>
                    <div className='svimg h-[3vw] w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person1.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-sm'>Roger Donin</p>
                        <p className='text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
            <div className='slider h-full  min-w-[35%] rounded-2xl flex flex-col gap-[1vh] justify-center items-start px-[2vw] py-[2vw] bg-white'>
                <ImQuotesLeft className='quotes' size={30} />
                <p className='slidermaintext  font-light'>Lorem ipsum dolor sit amet consectetur. Mattis laoreet pharetra scelerisque vel etiam sodales feugiat. Aliquet nisl vel neque sit lacus consequat. Arcu sagittis.</p>
                <div className='w-full h-[20%] flex justify-start items-center gap-[1vw]'>
                    <div className='svimg h-[3vw] w-[3vw] rounded-full object-cover object-center overflow-hidden'>
                        <img className='w-full h-full' src="Images/person1.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[.5vh]'>
                        <p className='text-sm'>Roger Donin</p>
                        <p className='text-xs font-light'>India</p>
                    </div>
                </div>
            </div>
        </div>
        

        <div className='flex gap-[1vh] justify-center items-center'>
            <button onClick={scrollLeft} className='p-[.6vh] px-[2vh] bg-white rounded-full'><LiaLongArrowAltLeftSolid size={20} /></button>
            <button onClick={scrollRight} className='p-[.6vh] px-[2vh] bg-white rounded-full'><LiaLongArrowAltRightSolid size={20} /></button>
        </div>
    </div>
  );
};

export default SeventhPage;