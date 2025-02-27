"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { ClasicalDancer, CricketPlayer, GuitarSinger, MusicGuitars, RangoliArt } from "@/components/Vectors/Icons";
import Contact from "@/pages/Event/Contact";
import Sponsors from "@/pages/Event/Sponsors";
import Culturals from "@/pages/Event/Culturals";
import Cat_Events from "@/components/Cat_Events";
import About from "../components/About"
import CountdownTimer from "@/components/Elements/CountdownTimer";
// import REGISTER_QR_CODE from "../../public/assets/images/yuvtarang-qr-code.png"
import COLLEGE_IMG from "../../public/assets/images/collage.png"
// Image Imports
import YUVTARANG_LOGO from "../../public/assets/images/yuvtarang-text.png";
import SQUAREPATTERN from "../../public/assets/images/squarepattern.png";
import Sports from "@/pages/Event/Sports";
import Faq from "@/pages/Event/Faq";

export default function Home() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setElementRef = (el: HTMLDivElement | null, index: number) => {
    if (el) elementsRef.current[index] = el;
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline();

    // Section fade-in and slide-up
    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // Staggered children animation
    elementsRef.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: index * 0.15 }
      );
    });
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Yuvtarang | A National Level Youth Festival</title>
      </Head>

      <main className="z-50 overflow-clip">
        {/* Image Horizontal Ruler */}
        <div className="overflow-hidden">
          <div className="flex items-center justify-center w-full -mx-3 h-6 select-none">
            {[...Array(320)].map((_, index) => (
              <div key={index} className="flex-none p-px">
                <Image src={SQUAREPATTERN} alt={`square-${index}`} width={100} height={100} className="w-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Section */}
        <section ref={sectionRef} className="relative w-full min-h-[calc(100vh-8.5rem)] flex flex-col justify-between lg:justify-center z-50">
          <Image
            src={COLLEGE_IMG}
            alt="yuvtarang-2025"
            width={2000}
            height={2000}
            className="blur-sm absolute top-0 w-full -z-[80] min-w-[40rem] md:min-w-0 opacity-90  h-[calc(100vh-8.5rem)] lg:h-[calc(100vh-6.5rem)] object-cover object-top "
            quality={75}
            priority={true}
          />
          
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 blur-[15rem] lg:blur-[10rem] bg-primary opacity-90 h-[50rem] lg:h-[25rem] w-[50rem] lg:w-[25rem] rounded-full"></div>
          
          <div className="relative max-container flex flex-col w-full z-50 ">
            <div ref={(el) => setElementRef(el, 0)} className="w-full space-y-10 lg:space-y-5 mt-5 max-container z-50 justify-items-center">
              {/* Optimized Image */}
              <div>
                <Image
                  src={YUVTARANG_LOGO}
                  alt="yuvtarang-2025"
                  width={2000}
                  height={2200}
                  className="w-[40rem] 2xl:w-[30rem] md:w-full md:!min-w-0"
                  quality={75}
                  priority={true}
                />
              </div>
              <p className='text-center text-sm text-footer uppercase font-sans hidden lg:block max-w-xl font-bold'>
                "Yuvtarang" is an annual cultural 2-Day festival org by all the students belonging to all the institutions forming the Vignan Vizag group.
              </p>

              <div ref={(el) => setElementRef(el, 1)}>
                <CountdownTimer />
              </div>

              {/* Optimized Date Box */}
              {/* <div ref={(el) => setElementRef(el, 2)} className="flex items-center border-2 border-blue-900 w-96 lg:w-72 rounded text-xl lg:text-sm bg-primary">
                <div className="w-1/2 bg-gradient-to-b from-blue-700 to-blue-900 text-white px-4 py-2 font-serif">
                  <div>
                    21<sup>st</sup> — 22<sup>nd</sup>
                  </div>
                </div>
                <div className="w-1/2 px-4 py-2 text-blue-800 font-serif uppercase">
                  <div>
                    February <span className="-mb-2">2025</span>
                  </div>
                </div>
              </div> */}
                <div className="flex font-bold text-3xl font-serif">
                  <div>
                February 21 <sup>st</sup>  & 22<sup>nd  </sup>, 2025
                    
                  </div>

                </div>
            </div>

<div className="flex items-center gap-8 justify-center w-full space-y-10 tracking-normal font-bold text-xl lg:space-y-5 mt-5 max-container z-50 justify-items-center">  

<div className="space-x-4">
                        
                        <a href="/register"
                        style={{
                          textShadow: "5px 5px 25px rgba(234, 179, 8, 0.7)",
                          // color: "#F59E0B", // Matches Tailwind's yellow-500
                        }}
                        className="bg-footer   text-white font-bold py-4 px-8 rounded-full text-lg shadow-[0_0_15px_0_0_20px_footer] hover:shadow-[0_0_20px_footer] transition-all duration-300 inline-block hover:-translate-y-1  ml-2">
                            Register Now!
                        </a>
                        
                        <a href="#about" className="bg-transparent border-2 border-footer text-footer hover:bg-footer-[.5] hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 inline-block hover:-translate-y-1 md:mt-0 mt-2">
                            About Yuvtarang
                        </a>
                    </div>
            {/* Register Button */}
            {/* <div ref={(el) => setElementRef(el, 3)} className="flex flex-col items-center justify-center md:mt-4 relative">
              <Link target="_blank" href="/register" className="mt-10 sm:mt-0"> */}
                {/* <button className="relative w-[180px] h-[40px] border-none rounded-[10px] bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-[250%] text-[#ffd277] flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden active:scale-95 hover:bg-right">
                  <span className="absolute top-0.5 w-[97%] h-[90%] rounded-[8px] flex items-center justify-center bg-black bg-opacity-80 transition-all duration-1000 hover:bg-right">
                    REGISTER NOW
                  </span>
                </button> */}
                {/* <button className="flex justify-center items-center px-6 py-3 border-[3px] border-black rounded-3xl">
                  Register Now!
                </button>
              </Link>
            </div>
            <Link href="#about">
            <div 
            className="flex justify-center items-center px-6 py-3 border-[3px] border-black rounded-3xl hover:bg-black hover:bg-opacity-50 cursor-pointer">
              About Yuvtarang */}
              {/* </div></Link> */}
</div>
</div>

          {/* Animated Background Elements */}
          {/* <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 -z-[40] opacity-5 lg:hidden">
            <RangoliArt />
          </div>
          <div className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-0 -z-[40] opacity-5 lg:hidden">
            <RangoliArt />
          </div> */}

          {/* Optimized Animated Figures */}
          {/* {[ClasicalDancer, CricketPlayer, GuitarSinger, MusicGuitars].map((Component, index) => (
            <div
              key={index}
              ref={(el) => setElementRef(el, 4 + index)}
              className={`absolute bottom-0 ${index === 0 ? "right-[14%]" : index === 1 ? "right-4" : index === 2 ? "left-[18%]" : "left-4 flex -space-x-16"
                } -z-40 xl:hidden opacity-85 will-change-transform`}
            >
              <Component />
            </div>
          ))} */} 
        </section>

        {/* Sponsors and Contact Info */}
        {/* <section className="relative w-full min-h-screen flex flex-col justify-between mb-20">
          <div className="space-y-20 mt-10 lg:mt-20 max-container z-50 ">
           
          </div>
        </section> */}
        <About />
            <Cat_Events />
            <Sponsors />
            <Faq /> 
            <Contact />
      </main>
    </div>
  );
}
