"use client";

import React, {useState} from 'react'
import { faqs } from '@/lib/faq'
import Link from 'next/link';
const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="flex flex-col justify-center items-center py-10 bg-[#B88A44]/60">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
  
    <div className="w-screen flex flex-col justify-center text-white transition-transform items-center">
      <div className="flex flex-col space-y-4 w-[50%] sm:w-[80%]">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg tracking-wide bg-[#553919]/80 p-2 shadow-md ">
            <button
              className="w-full text-left outline-none border-none  font-bold flex justify-between items-center p-2"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>
  {openIndex === index ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 15l7-7 7 7"
      ></path>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  )}
</span>

            </button>
            {openIndex === index && <p className="mt-2 p-2 text-medium font-semibold  text-white">{faq.ans}</p>}
          </div>
        ))}
      </div>
    </div>

    <span className='pt-8 text-lg font-semibold underline'>
        <Link  href={'/coc'}>  Code Of Conduct</Link>
       </span>
  </section>
  

  )
}

export default Faq