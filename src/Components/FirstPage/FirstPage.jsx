import React from 'react'
import './FirstPage.css'

const FirstPage = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center ' >
        <div className=' heroimg h-[95%] w-[97%] rounded-3xl bg-cover bg-center flex flex-col gap-[3%] justify-center items-center ' >
            <p className=' herotext1 text-6xl text-white ' >Luxury Oral Care. Wherever You Are.</p>
            <p className=' herotext2 text-4xl text-white ' >From a Legacy of Award-Winning Excellence.</p>
            <div className='flex flex-col justify-center items-center' >
                <p className='herotext3 text-2xl text-white font-light ' >Revolutionizing organizational wellness through bespoke on-site dental care,</p>
                <p className='herotext3 text-2xl text-white font-light ' >advanced analytics, and personalized insights.</p>

            </div>
            
            <button className=' herobutton w-[13%] h-[6%] rounded-full bg-white text-black ' >Learn More</button>
        </div>

    </div>
  )
}

export default FirstPage