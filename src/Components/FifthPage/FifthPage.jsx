import React from 'react'
import './FifthPage.css'

const FifthPage = () => {
  return (
    <div className='mb-5 w-full flex flex-col gap-[2vh] justify-center items-center px-4 md:px-0'>
        <p className='fifthmaintext text-3xl md:text-5xl uppercase text-center'>
          Recognition and <span>Rewards</span>
        </p>
        <p className='fifthsubtext text-sm md:text-lg font-light text-center'>
          LuxySmile partnerships go beyond care to deliver recognition:
        </p>
        <div className='certdiv h-[65%] w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0'>
            <div className='imgcontainer h-full w-full md:w-[50%] flex flex-col px-2 md:px-[4vw]'>
                <div className='h-[80%] w-full object-cover object-center'>
                    <img className='h-full w-full' src="Images/certificate1.png" alt="" />
                </div>
                <div className='flex flex-col gap-[1vh] text-center md:text-left'>
                    <p className='certmaintext text-xl md:text-3xl font-medium uppercase'>
                      Wellness Certified Status
                    </p>
                    <p className='certsubtext font-light text-sm md:text-lg'>
                      Officially showcase your organization’s commitment to health and innovation.
                    </p>
                </div>
            </div>
            <div className='imgcontainer h-full w-full md:w-[50%] flex flex-col px-2 md:px-[4vw]'>
                <div className='h-[80%] w-full object-cover object-center'>
                    <img className='h-full w-full' src="Images/certificate2.png" alt="" />
                </div>
                <div className='flex flex-col gap-[1vh] text-center md:text-left'>
                    <p className='certmaintext text-xl md:text-3xl font-medium uppercase'>
                      Annual Wellness Awards
                    </p>
                    <p className='certsubtext font-light text-sm md:text-lg'>
                      Compete for regional honors and media coverage, highlighting your role as a leader in promoting community wellness.
                    </p>
                </div>
            </div>
        </div>
        <button className='p-[1.2vh] px-[4vw] text-sm md:text-base learnmorebutton text-white rounded-full shadow-black shadow-2xl'>
          Learn More
        </button>
    </div>
  )
}

export default FifthPage