import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { LuMenu } from "react-icons/lu";
const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const menuRef = useRef(null);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const toggleNavLinks = () => {
      setIsVisible(!isVisible);
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false); // Close the menu when clicking outside
      }
    };

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      // Add event listener to detect clicks outside the menu
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener('scroll', handleScroll);
      return () => {
        // Clean up event listener on unmount
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos, visible, handleScroll]);
  return (
    <div className={`navbar fixed h-[3.5vw] w-full flex justify-between items-center bg-transparent px-[3vw] top-[5%] z-[20] transition-transform duration-300 ${visible ? 'translate-y-[1vw]' : '-translate-y-[8vw]'}`} >
        <div  className='logo flex w-[9.5vw] h-[80%] justify-start items-center rounded-full gap-[2%] px-[.5vh] ' >
            <div className='object-cover object-center h-[90%] w-[30%] rounded-full overflow-hidden ' >
                <img className='w-full h-full' src="Images/logoimg.png" alt="" />
            </div>
            <p>LUXYSMILE</p>
        </div>
        <div className=' navhide w-[20%] h-[5px] flex justify-center items-center  ' >
            
            <div className='w-full h-[1px] bg-zinc-500 ' ></div>
            <div className='w-[5px] h-[5px] rounded-full bg-zinc-500 ' ></div>
        </div>
        <div className=' navhide text-zinc-400 flex justify-center items-center gap-[4vh]' >
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Treatment</a>
            <a href="">About Us</a>
            <a href="#eight">FAQ's</a>
        </div>
        <div className=' navhide w-[20%] h-[5px] flex justify-center items-center  ' >
            <div className='w-[5px] h-[5px] rounded-full bg-zinc-500 ' ></div>
            <div className='w-full h-[1px] bg-zinc-500 ' ></div>
        </div>
        <div className='navhide contactus h-[80%] w-[9.5vw] flex justify-center items-center rounded-full text-white shadow-zinc-400 shadow-md ' >
            <p>Contact Us</p>
        </div>
        <div className='hidden menu relative navshow flex flex-col justify-center items-center  ' >

            <button onFocus={toggleNavLinks} className='flex justify-center items-center p-[.7vh] px-[2vh] rounded-full bg-white text-black  ' ><LuMenu size={25} /></button>
            <div ref={menuRef} style={{display: isVisible ? "flex" : "none",}} className='temphide right-[3%] mt-[1vh] absolute rounded-lg bg-white flex flex-col justify-center items-center w-fit py-[2vh] px-[4vh] ' >
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">Treatment</a>
                <a href="">About Us</a>
                <a href="">FAQ's</a>
            </div>
        </div>

    </div>
  )
}

export default Navbar