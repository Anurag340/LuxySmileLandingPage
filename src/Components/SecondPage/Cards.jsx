import React from 'react'
import './Cards.css';

const Cards = ({data}) => {
  return (
    <div className='secondcard w-[95%] mx-auto md:w-full sm:min-w-[30%] min-h-[40%] rounded-3xl flex flex-col justify-center items-center p-4' >
        <div className='secondimgdiv h-[90%] w-full sm:w-[95%] rounded-3xl object-cover object-center' >
          <img className='w-full h-full rounded-3xl' src={data.img} alt="" />
        </div>

        <p className='cardmaintext mt-4' >{data.des1}</p>
        <p className='cardsubtext text-sm font-light w-[90%] sm:w-[70%] text-center mt-2' >{data.des2}</p>
    </div>
  )
}

export default Cards