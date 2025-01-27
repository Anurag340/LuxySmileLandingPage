import React from 'react'
import './Footer.css'
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer w-full h-[50vh] flex flex-col justify-center items-center ' >
        <div className=' footermaindiv h-[75%] w-full flex px-[6vw]  ' >
            <div className=' footerscdiv w-[30%] pr-[6vw] px-[3vw] h-full flex flex-col justify-center items-start gap-[2vh] ' >
                <div  className='footerlogo flex w-[9.5vw] h-[14%] justify-start items-center rounded-full gap-[2%] px-[.5vh] ' >
                    <div className='object-cover object-center h-[90%] w-[30%] rounded-full overflow-hidden ' >
                        <img className='w-full h-full' src="Images/logoimg.png" alt="" />
                    </div>
                    <p>LUXYSMILE</p>
            
                </div>

                <p className='text-sm font-light' >Lorem ipsum dolor sit amet consectetur. Netus leo lorem viverra vestibulum.</p>
                <div className='flex justify-center items-center gap-[1vh] ' >
                <a href=""><CiFacebook size={25} /></a>
                <a href=""><CiInstagram size={25}/></a>
                <a href=""><CiLinkedin size={25}/></a>
                <a href=""><RiTwitterXFill size={25}/></a>

                </div>

            </div>



            <div className=' footerlinks w-[40%] h-full flex gap-[3vw] justify-center items-start pt-[5vw] ' >
                <div>
                    <p className='font-medium mb-[1vh]' >QuickLinks</p>
                    <div className='flex flex-col gap-[.5vh] '>
                    <a className='text-sm font-light' href="">Home</a>
                    <a className='text-sm font-light' href="">Services</a>
                    <a className='text-sm font-light' href="">Treatment</a>
                    <a className='text-sm font-light' href="">About Us</a>
                    <a className='text-sm font-light' href="">FAQs</a>
                    </div>
                </div>
                <div>
                    <p className='font-medium mb-[1vh]' >Services</p>
                    <div className='flex flex-col gap-[.5vh] '>
                    <p className='text-sm font-light'>Lorem Ipsum</p>
                    <p className='text-sm font-light'>Lorem Ipsum</p>
                    <p className='text-sm font-light'>Lorem Ipsum</p>
                    <p className='text-sm font-light'>Lorem Ipsum</p>
                    <p className='text-sm font-light'>Lorem Ipsum</p>
                    </div>
                </div>
                <div>
                    <p className='font-medium mb-[1vh]' >Company</p>
                    <div className='flex flex-col gap-[.5vh] '>
                    <p className='text-sm font-light'>Privacy Policy</p>
                    <p className='text-sm font-light'>Cookie Policy</p>
                    <p className='text-sm font-light'>Terms & Conditions</p>
                    <p className='text-sm font-light'>Security</p>
                    </div>
                </div>
            </div>
            <div className='w-[30%] h-full flex flex-col justify-start items-start pt-[5vw] pl-[5vw] ' >
                <p className='font-medium mb-[1vh]' >Contact Us</p>
                <div className='flex flex-col gap-[2vh] items-start ' >
                    <div className='flex justify-center items-center gap-[1vh]' >
                        <div><IoLocationOutline size={25} /></div>
                        <div className='footertarget' >
                            <p className='text-xs font-light mb-[.5vh] ' >Office Location</p>
                            <div className='flex gap-[1vh]' >
                                <img className=' footerimg h-[1.5vw] w-[1.5vw] rounded-full ' src="Images/usa.png" alt="" />
                                <p className='text-sm' >USA</p>
                                <img className=' footerimg h-[1.5vw] w-[1.5vw] rounded-full ' src="Images/india.png" alt="" />
                                <p className='text-sm'>Delhi</p>
                                <img className=' footerimg h-[1.5vw] w-[1.5vw] rounded-full ' src="Images/india.png" alt="" />
                                <p className='text-sm'>Bangalore</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex footerctdiv justify-center items-center gap-[1vh]' >
                        <div><PiPhoneCallLight size={25} /></div>
                        <div className='footertarget' >
                            <p className='text-xs font-light' >Phone Number</p>
                            <div className='flex gap-[1vh]' >
                                <p className='text-sm'>+1 0123 9612 185</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-[1vh]' >
                        <div><AiOutlineMail size={25} /></div>
                        <div className='footertarget' >
                            <p className='text-xs font-light' >Email</p>
                            <div className='flex gap-[1vh]' >
                                <p className='text-sm'>luxysmile@gmail.com</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div className=' footerbar w-[82%] h-[1px] bg-zinc-500  ' ></div>
        <div className='w-full flex justify-center items-center' >
            <p className='text-sm mt-[2vw] ' >© Copyright 2024 ExpertBuddy. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer