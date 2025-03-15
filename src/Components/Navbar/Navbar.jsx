import React, { useEffect, useRef, useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
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
    <div className={`navbar fixed h-[10vw] md:h-[3.5vw]  w-full flex justify-between items-center bg-transparent px-[6vw] md:px-[3vw] top-[5%] z-[20] transition-transform duration-300 ${visible ? 'translate-y-[1vw]' : '-translate-y-[8vw]'}`} >
        <div className='navdiv flex w-[35%] md:w-[9.5vw] h-[80%] justify-start items-center rounded-full gap-[2%] px-[.5vh] bg-[#f7f7ed]'>
            <div className='navlogo object-cover object-center h-[90%] w-[30%] rounded-full overflow-hidden'>
                <img className='w-full h-full' src="Images/logoimg.png" alt="Logo" />
            </div>
            <p>LUXYSMILE</p>
        </div>
        <div className='hidden md:flex w-[20%] h-[5px] justify-center items-center'>
            <div className='w-full h-[1px] bg-zinc-500'></div>
            <div className='w-[5px] h-[5px] rounded-full bg-zinc-500'></div>
        </div>
        <div className='hidden md:flex text-zinc-400 justify-center items-center gap-[4vh]'>
            <Link to="/" className='hover:text-[#1D3C37]'>Home</Link>
            <Link to="/oral-health-care" className='hover:text-[#1D3C37]'>Services</Link>
            <Link to="/lsps" className='hover:text-[#1D3C37]'>Treatment</Link>
            <Link to="/exclusive-advantages" className='hover:text-[#1D3C37]'>About Us</Link>
            <Link to="/faqs" className='hover:text-[#1D3C37]'>FAQ's</Link>
        </div>
        <div className='hidden md:flex w-[20%] h-[5px] justify-center items-center'>
            <div className='w-[5px] h-[5px] rounded-full bg-zinc-500'></div>
            <div className='w-full h-[1px] bg-zinc-500'></div>
        </div>
        <button onClick={() => navigate('/contact-us')} className='hidden md:flex h-[80%] w-[9.5vw] justify-center items-center rounded-full text-white shadow-zinc-400 shadow-md bg-[#1D3C37]'>
            Contact Us
        </button>
        <div className='relative flex flex-col justify-center items-center md:hidden'>
            <button onClick={toggleNavLinks} className='flex justify-center items-center p-[.7vh] px-[2vh] rounded-full bg-white text-black hover:text-[#f7f7ed]'>
                <LuMenu size={25} />
            </button>
            <div ref={menuRef} style={{ display: isVisible ? "flex" : "none" }} className='absolute top-full mt-[1vh] right-0 rounded-lg bg-white flex flex-col justify-center items-center w-fit py-[2vh] px-[4vh]'>
                <Link to="/" className='text-[#1D3C37] hover:text-[#f7f7ed]'>Home</Link>
                <Link to="/oral-health-care" className='text-[#1D3C37] hover:text-[#f7f7ed]'>Services</Link>
                <Link to="/lsps" className='text-[#1D3C37] hover:text-[#f7f7ed]'>Treatment</Link>
                <Link to="/exclusive-advantages" className='text-[#1D3C37] hover:text-[#f7f7ed]'>About Us</Link>
                <Link to="/faqs" className='text-[#1D3C37] hover:text-[#f7f7ed]'>FAQ's</Link>
            </div>
        </div>
    </div>
  );
}

export default Navbar