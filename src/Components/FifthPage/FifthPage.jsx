import React from 'react'
import './FifthPage.css'

const FifthPage = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-[2vh] justify-center items-center ' >
        <p className=' fifthmaintext text-5xl uppercase' >Recognition and <span>Rewards</span></p>
        <p className=' fifthsubtext text-lg font-light ' >LuxySmile partnerships go beyond care to deliver recognition:</p>
        <div className=' certdiv h-[65%] w-full flex justify-center items-center' >
            <div className='imgcontainer h-full w-[50%] flex flex-col px-[4vw] '>
                <div className='  h-[80%] w-full object-cover object-center ' >
                    <img className='h-full w-full'  src="Images/certificate1.png" alt="" />

                </div>
                <div className='flex flex-col gap-[1vh]' >
                    <p className=' certmaintext text-3xl font-medium uppercase' >Wellness Certified Status</p>
                    <p className=' certsubtext font-light text-lg' >Officially showcase your organization’s commitment to health and innovation.</p>
                </div>

            </div>
            <div className=' imgcontainer h-full w-[50%] flex flex-col px-[4vw] '>
                <div className='h-[80%] w-full object-cover object-center ' >
                    <img className='h-full w-full'  src="Images/certificate2.png" alt="" />

                </div>
                <div className='flex flex-col gap-[1vh]' >
                    <p className=' certmaintext text-3xl font-medium uppercase' >Annual Wellness Awards</p>
                    <p className=' certsubtext font-light text-lg' >Compete for regional honors and media coverage, highlighting your role as a leader in promoting community wellness</p>
                </div>

            </div>

        </div>
        <button className='p-[1.2vh] px-[4vw] learnmorebutton text-white rounded-full shadow-black shadow-2xl ' >Learn More</button>

    </div>
  )
}

export default FifthPage