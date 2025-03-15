import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How does the kiosk installation work?",
      answer: "Involves assessing the institution's size, hours, and expected turnout, promoting the camp through digital and print materials, and selecting a clean, ventilated space for AI diagnostics and treatment stations..."
    },
    {
      question: "Are these treatments truly premium in quality?",
      answer: "Involves assessing the institution's size, hours, and expected turnout, promoting the camp through digital and print materials, and selecting a clean, ventilated space for AI diagnostics and treatment stations..."
    },
    {
      question: "Do we need to manage complex logistics?",
      answer: "Involves assessing the institution's size, hours, and expected turnout, promoting the camp through digital and print materials, and selecting a clean, ventilated space for AI diagnostics and treatment stations..."
    },
    {
      question: "Is personal data secure?",
      answer: "Involves assessing the institution's size, hours, and expected turnout, promoting the camp through digital and print materials, and selecting a clean, ventilated space for AI diagnostics and treatment stations..."
    },
    {
      question: "How does the kiosk installation work?",
      answer: "Involves assessing the institution's size, hours, and expected turnout, promoting the camp through digital and print materials, and selecting a clean, ventilated space for AI diagnostics and treatment stations..."
    },
    {
      question: "Do we need to manage complex logistics?",
      answer: "Involves assessing the institution's size, hours, and expected turnout, promoting the camp through digital and print materials, and selecting a clean, ventilated space for AI diagnostics and treatment stations..."
    },
    {
      question: "Is personal data secure?",
      answer: "Involves assessing the institution's size, hours, and expected turnout, promoting the camp through digital and print materials, and selecting a clean, ventilated space for AI diagnostics and treatment stations..."
    }
  ];

  return (
    <div className="bg-[var(--luxbg)] text-[var(--luxdark)]" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Navbar />
      <main className="max-w-4xl mt-16 mx-auto p-6">
        <div className="bg-[var(--luxbg)] rounded-lg p-8">
          <div className='w-full h-[10vh]  flex justify-center items-center' >
            <div className='w-[30%] h-[1px] bg-black ' ></div>
            <div className='w-[4px] h-[4px] rounded-full bg-black  ' ></div>
          <div className='w-fit px-[1vh]  h-[50%] rounded-full border mx-[6px] border-gray-600 flex justify-center items-center' >
                <h1 className="text-xl font-bold ">Frequently asked questions</h1>
          </div>
          <div className='w-[4px] h-[4px] rounded-full bg-black  ' ></div>
          <div className='w-[30%] h-[1px] bg-black ' ></div>
         
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-1/3 border-t border-gray-300"></div>
          </div>
          <h2 className="text-center text-4xl font-bold mt-4">
            Got <span className="text-[var(--luxyellow)]">questions?</span> We have got <span className="text-[var(--luxgreen)]">Answers!</span>
          </h2>
          <p className="text-center text-[var(--luxgray)] mt-4">
            We understand you might have a few questions before starting a journey to better health. Here are some of the most asked queries.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="bg-[var(--luxgreen)] text-[var(--luxwhite)] px-6 py-2 rounded-full">Individual</button>
            <button className="border border-[var(--luxgray)] text-[var(--luxgray)] px-6 py-2 rounded-full">Organization</button>
          </div>
          <div className="mt-8 space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-[var(--luxlightgray)] rounded-lg p-4 bg-[var(--luxwhite)]">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                  <h3 className="text-lg font-semibold text-[var(--luxdark)] w-[90%]">{faq.question}</h3>
                  <IoIosArrowDropdownCircle 
                    className={`w-[25px] h-[25px] min-w-[25px] transform transition-transform duration-500 ${
                      openIndex === index 
                        ? 'text-[var(--luxgreen)] rotate-180' 
                        : 'text-[var(--luxgray)]'
                    }`}
                  />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="mt-4 text-[var(--luxgray)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Faqs;
