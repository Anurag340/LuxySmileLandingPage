import React from 'react'
import './Cards.css';

const Cards = ({data}) => {
  return (
    <div className=' secondcard h-full w-[25%] min-w-fit rounded-3xl flex flex-col justify-center items-center ' >
        <div className=' secondimgdiv h-[90%] w-[95%] rounded-3xl object-cover object-center' >
          <img className='w-full h-full' src={data.img} alt="" />
        </div>

        <p className='cardmaintext' >{data.des1}</p>
        <p className=' cardsubtext text-sm font-light w-[70%] text-center ' >{data.des2}</p>



    </div>
  )
}

export default Cards