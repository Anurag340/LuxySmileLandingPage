import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer w-full min-h-[50vh] flex flex-col justify-center items-center py-8' >
        <div className='footermaindiv w-[82%] flex flex-col md:flex-row px-6 items-center md:items-start' >
            {/*section-1 */}
            <div className='footerscdiv w-full md:w-[30%] pr-6 px-3 h-full flex flex-col justify-center items-center md:items-start gap-4 md:gap-8' >
                <div className='footerlogo flex w-40 h-10 justify-center md:justify-start items-center rounded-full gap-2 px-2 bg-[#e9e9d9]' >
                    <div className='object-cover object-center h-[90%] w-10 rounded-full overflow-hidden' >
                        <img className='w-full h-full' src="Images/logoimg.png" alt="logo" />
                    </div>
                    <p className='text-sm md:text-base'>LUXYSMILE</p>
                </div>

                <p className='text-sm font-light text-center md:text-left' >Lorem ipsum dolor sit amet consectetur. Netus leo lorem viverra vestibulum.</p>
                <div className='flex justify-center items-center gap-4 mt-2' >
                    <a href="" className='hover:opacity-70'><CiFacebook size={25} /></a>
                    <a href="" className='hover:opacity-70'><CiInstagram size={25}/></a>
                    <a href="" className='hover:opacity-70'><CiLinkedin size={25}/></a>
                    <a href="" className='hover:opacity-70'><RiTwitterXFill size={25}/></a>
                </div>
            </div>

            {/* section-2 */}
            <div className='footerlinks w-full md:w-[40%] h-full flex flex-row gap-6 justify-center items-start pt-8 md:pt-0' >
                <div className='w-full md:w-auto text-center md:text-left'>
                    <p className='font-medium mb-2' >QuickLinks</p>
                    <div className='flex flex-col gap-1'>
                        <a className='text-sm font-light' href="">Home</a>
                        <a className='text-sm font-light' href="">Services</a>
                        <a className='text-sm font-light' href="">Treatment</a>
                        <a className='text-sm font-light' href="">About Us</a>
                        <a className='text-sm font-light' href="">FAQs</a>
                    </div>
                </div>
                <div className='w-full md:w-auto text-center md:text-left'>
                    <p className='font-medium mb-2' >Services</p>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-light'>Lorem Ipsum</p>
                        <p className='text-sm font-light'>Lorem Ipsum</p>
                        <p className='text-sm font-light'>Lorem Ipsum</p>
                        <p className='text-sm font-light'>Lorem Ipsum</p>
                        <p className='text-sm font-light'>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='w-full md:w-auto text-center md:text-left'>
                    <p className='font-medium mb-2' >Company</p>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-light'>Privacy Policy</p>
                        <p className='text-sm font-light'>Cookie Policy</p>
                        <p className='text-sm font-light'>Terms & Conditions</p>
                        <p className='text-sm font-light'>Security</p>
                    </div>
                </div>
            </div>

            {/* section-3 */}
            <div className='w-full md:w-[30%] h-full flex flex-col justify-start items-center md:items-start pt-8 md:pt-0 md:pl-8' >
                <p className='font-medium mb-2' >Contact Us</p>
                <div className='flex flex-col gap-4 items-center md:items-start' >
                    <div className='flex justify-center items-center gap-2' >
                        <div><IoLocationOutline size={25} /></div>
                        <div className='footertarget' >
                            <p className='text-xs font-light mb-1' >Office Location</p>
                            <div className='flex gap-2' >
                                <img className='footerimg h-6 w-6 rounded-full' src="Images/usa.png" alt="USA" />
                                <p className='text-sm' >USA</p>
                                <img className='footerimg h-6 w-6 rounded-full' src="Images/india.png" alt="Delhi" />
                                <p className='text-sm'>Delhi</p>
                                <img className='footerimg h-6 w-6 rounded-full' src="Images/india.png" alt="Bangalore" />
                                <p className='text-sm'>Bangalore</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex footerctdiv justify-center items-center gap-2' >
                        <div><PiPhoneCallLight size={25} /></div>
                        <div className='footertarget' >
                            <p className='text-xs font-light' >Phone Number</p>
                            <div className='flex gap-2' >
                                <p className='text-sm'>+1 0123 9612 185</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2' >
                        <div><AiOutlineMail size={25} /></div>
                        <div className='footertarget' >
                            <p className='text-xs font-light' >Email</p>
                            <div className='flex gap-2' >
                                <p className='text-sm'>luxysmile@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footerbar w-[82%] h-[1px] bg-zinc-500 my-6'></div>
        <div className='w-full flex justify-center items-center' >
            <p className='text-xs md:text-sm text-center mt-2'>© Copyright 2024 ExpertBuddy. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer