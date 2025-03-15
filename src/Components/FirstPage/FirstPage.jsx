import React from 'react'
import './FirstPage.css'

const FirstPage = () => {
  return (
    <div className='firstpage h-screen w-full flex justify-center items-center relative object-cover object-center overflow-hidden'>
      <div className='absolute h-[95%] w-[97%] rounded-3xl fimg object-cover object-center overflow-hidden'>
        <img className='h-full w-full' src="Images/heroimg.jpg" alt="" />
      </div>

      <div className='heroimg h-[95%] w-[97%] rounded-3xl bg-cover bg-center flex flex-col gap-4 md:gap-[3%] justify-center items-center px-4 md:px-0'>
        <p className='herotext1 text-3xl md:text-5xl lg:text-6xl text-white text-center'>Luxury Oral Care. Wherever You Are.</p>
        <p className='herotext2 text-2xl md:text-3xl lg:text-4xl text-white text-center'>From a Legacy of Award-Winning Excellence.</p>
        <div className='flex flex-col justify-center items-center'>
          <p className='herotext3 text-lg md:text-xl lg:text-2xl text-white font-light text-center'>Revolutionizing organizational wellness through bespoke on-site dental care,</p>
          <p className='herotext3 text-lg md:text-xl lg:text-2xl text-white font-light text-center'>advanced analytics, and personalized insights.</p>
        </div>
        
        <button className='herobutton w-[50%] md:w-[25%] lg:w-[13%] h-[6%] rounded-full bg-white text-black mt-4'>Learn More</button>
      </div>
    </div>
  )
}

export default FirstPage