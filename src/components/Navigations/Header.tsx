"use client";

import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import { RangoliArt, RangoliArt1 } from '../Vectors/Icons';
// import LOGO from "../../../public/assets/images/yuvtarang-logo.png";
import LOGO from "../../../public/assets/images/yuvtarang-text.png";

import VERTICAL_RULER from "../../../public/assets/svgs/vertical-ruler.svg";

const TextScrambleHover = ({ text, className }: { text: string; className: string }) => {
  return <div className={`${className}`}>{text}</div>
}

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();



  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);


  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };

    const toggleScroll = (disable: boolean) => {
      if (window.innerWidth <= 768) {
        document.body.style.overflow = disable ? "hidden" : "";
        document.body.style.paddingRight = disable
          ? `${window.innerWidth - document.documentElement.clientWidth}px`
          : "";
      }
    };

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 0.4 } });

    if (isSidebarOpen) {
      backdropRef.current?.classList.remove("hidden"); // Show backdrop immediately

      tl.set(sidebarRef.current, { willChange: "transform, backdropFilter" }) // Improve rendering for animation
        .to(
          backdropRef.current,
          {
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            opacity: 1,
          },
          0
        )
        .to(
          sidebarRef.current,
          {
            x: "0%",
            width: window.innerWidth <= 740 ? "30rem" : "80rem",
          },
          0
        );
      toggleScroll(true);
    } else {
      tl.to(
        sidebarRef.current,
        {
          x: "100%",
          width: "0rem",
        },
        0
      )
        .to(
          backdropRef.current,
          {
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(255, 255, 255, 0)",
            opacity: 0,
          },
          "-=0.3"
        )
        .set(sidebarRef.current, { willChange: "auto" });

      // Delay hiding the backdrop by 400ms after animation
      setTimeout(() => {
        backdropRef.current?.classList.add("hidden");
      }, 400);

      toggleScroll(false);
    }

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
      toggleScroll(false);
    };
  }, [isSidebarOpen]);



  return (
    <>
      <div className='py-4 z-[200] w-full max-container lg:!p-0 scroll-smooth sticky top-0 bg-white/40 shadow-xl  backdrop-blur-lg border border-white/20 rounded-xl p-6'>
        <div className=' flex items-center justify-between'>
          <Link href={"/"} className='w-fit flex items-center'>
            <div className='w-fit'>
              <Image src={LOGO} alt='yuvtarang-logo' className='w-28 object-contain select-none' priority /></div>
          </Link>
          <div className='flex items-center gap-10'>
            <div className='flex items-center lg:hidden gap-10  text-lg  font-bold'>
              <Link 
              className='hover:text-yellow-400 transition-all ease-in-out '
              href={"/"}>Home</Link>
              <Link 
              className='hover:text-yellow-400 transition-all ease-in-out '
              href={"/#events"}>Events</Link>
              <Link 
              className='hover:text-yellow-400 transition-all ease-in-out '
              href={"/#faq"}>FAQ</Link>
              <Link 
              className='hover:text-yellow-400 transition-all ease-in-out '
              href={"/#sponsors"}>Sponsors</Link>
              <Link 
              className='hover:text-yellow-400 transition-all ease-in-out '
              href={"/gallery"}>Gallery</Link>
              <Link 
              className='hover:text-yellow-400 transition-all ease-in-out '
              href={"/#contact"}>Contact</Link>
            </div>
            {/* glow button  */}
            <button
             className='font-semibold rounded-3xl px-3 py-2 bg-yellow-500 drop-shadow-lg shadow-[0_0_20px_1px_rgba(255,0,150,0.7)] pulses'
             >Register now!</button>
            <div className='lg:w-fit -mt-1'>
              <button className='h-10 w-14 flex items-center justify-center group transition-all duration-100 ease-in-out font-bold'
                onClick={toggleSidebar}
              >
                <div className='flex flex-col gap-[6.2px]'>
                  <div className='bg-neutral-600 w-8 h-0.5 rounded-full'></div>
                  <div className='bg-neutral-600 w-8 h-0.5 rounded-full'></div>
                  <div className='bg-neutral-600 w-8 h-0.5 rounded-full'></div>
                </div>
                <span className='sr-only'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar & Backdrop */}
      <div ref={backdropRef} className={`fixed top-0 right-0 w-full h-full z-[100]`} onClick={toggleSidebar} style={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(255, 255, 255, 0)" }} />

      <div ref={sidebarRef} className="fixed z-[100] top-0 right-0 h-screen lg:h-[100dvh] bg-primary overflow-hidden w-0">
        <button className="absolute z-[202] top-4 right-0 lg:right-3 w-fit p-4 hidden lg:block text-xs group" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className='hover:stroke-2' viewBox="0 0 12.82 12.28" width="18" height="18">
            <path d="M0.34 0.22 L12.54 12.28" className='stroke-border stroke-1' stroke-width="0.5"></path>
            <path d="M.34 12.28 12.54.22" className='stroke-border stroke-1' stroke-width="0.5"></path>
          </svg>
        </button>
        <div className="grid grid-cols-12 sm:w-[26rem] h-screen">
          <div className='col-start-1 col-end-2 lg:col-start-3 lg:col-end-4 p-6 lg:p-4 py-10 lg:pt-16 lg:hidden'>
            <li className='text-xs lg:text-[9px] uppercase font-medium font-serif list-[square] whitespace-nowrap w-10'>Discover</li>
          </div>
          <div className='relative col-start-2 col-end-11 lg:col-start-3 lg:col-end-11 p-6 lg:p-4 py-8 mt-10 lg:-mt-5 lg:pt-16 lg:ml-7 flex flex-col justify-between h-full'>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 text-5xl lg:text-4xl text-border uppercase font-extrabold font-serif tracking-tight'>
              <Link href={`/`} onClick={toggleSidebar} className={`${router.pathname == "/" ? "bg-footer-secondary hover:!bg-footer-secondary text-primary hover:text-primary" : "text-footer"} hover:bg-primary-light hover:text-border p-1 px-2 w-52 lg:w-40 rounded bevel-normal-br`}>
                <TextScrambleHover text="Home" className='' />
              </Link>
              <Link href={`/timeline`} onClick={toggleSidebar} className={`${router.pathname == "/timeline" ? "bg-footer-secondary hover:!bg-footer-secondary text-primary hover:text-primary" : "text-footer"} hover:bg-primary-light hover:text-border p-1 px-2 w-72 lg:w-56 rounded bevel-normal-br`}>
                <TextScrambleHover text="Timeline" className='' />
              </Link>
              {/* <Link href={`/prizes`} onClick={toggleSidebar} className={`${router.pathname == "/prizes" ? "bg-footer-secondary hover:!bg-footer-secondary text-primary hover:text-primary" : "text-footer"} hover:bg-primary-light hover:text-border p-1 px-2 w-60 lg:w-44 rounded bevel-normal-br`}>
                <TextScrambleHover text="Prizes" className='' />
              </Link> */}
              <Link href={`/lost-found`} onClick={toggleSidebar} className={`${router.pathname == "/lost-found" ? "bg-footer-secondary hover:!bg-footer-secondary text-primary hover:text-primary" : "text-footer"} hover:bg-primary-light hover:text-border p-1 px-2 w-[30rem] lg:w-[23rem] rounded bevel-normal-br`}>
                <TextScrambleHover text="Lost and Found" className='' />
              </Link>
              <Link href={`/sponsors`} onClick={toggleSidebar} className={`${router.pathname == "/sponsors" ? "bg-footer-secondary hover:!bg-footer-secondary text-primary hover:text-primary" : "text-footer"} hover:bg-primary-light hover:text-border p-1 px-2 w-80 lg:w-60 rounded bevel-normal-br`}>
                <TextScrambleHover text="Sponsors" className='' />
              </Link>
              <Link href={`/gallery`} onClick={toggleSidebar} className={`${router.pathname == "/gallery" ? "bg-footer-secondary hover:!bg-footer-secondary text-primary hover:text-primary" : "text-footer"} hover:bg-primary-light hover:text-border p-1 px-2 w-72 lg:w-56 rounded bevel-normal-br`}>
                <TextScrambleHover text="Gallery" className='' />
              </Link>
              <Link href={`/#about`} onClick={toggleSidebar} className={`${router.pathname == "/#about" ? "bg-footer-secondary hover:!bg-footer-secondary text-primary hover:text-primary" : "text-footer"} hover:bg-primary-light hover:text-border p-1 px-2 w-52 lg:w-40 rounded bevel-normal-br`}>
                <TextScrambleHover text="About" className='' />
              </Link>
              <Link href={`/#faq`} onClick={toggleSidebar} className={`${router.pathname == "/#faq" ? "bg-footer-secondary hover:!bg-footer-secondary text-primary hover:text-primary" : "text-footer"} hover:bg-primary-light hover:text-border p-1 px-2 w-36 lg:w-28 rounded bevel-normal-br`}>
                <TextScrambleHover text="FAQ" className='' />
              </Link>
            </div>

            {/* rangoli pattern */}
            <div
              className="absolute transform translate-x-1/2 translate-y-1/2 bottom-32 lg:bottom-[10.6rem] -right-28 lg:-right-[8.6rem] -z-[40] opacity-5"
            >
              <RangoliArt />
            </div>
            <div
              className="absolute transform translate-x-1/2 translate-y-1/2 bottom-32 lg:bottom-[10.6rem] -right-28 lg:-right-[8.6rem] -z-[40] "
            >
              <RangoliArt1 className="!w-[80vw]" />
            </div>
          </div>
          <div className='border-l border-border lg:hidden col-start-12 col-end-13 flex flex-col items-center overflow-clip bg-primary z-10'>
            <button className="w-full p-2.5 py-4 text-sm border-b border-border my-8 gap-2 flex items-center justify-center group" onClick={toggleSidebar}>
              <span className='uppercase font-serif group-hover:font-medium transition-all ease-in-out'>CLOSE</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='hover:stroke-2' viewBox="0 0 12.82 12.28" width="18" height="18">
                <path d="M0.34 0.22 L12.54 12.28" className='stroke-border group-hover:stroke-border group-hover:stroke-1 transition-all divide-neutral-400 ease-in-out' stroke-width="0.5"></path>
                <path d="M0.34 12.28 L12.54 0.22" className='stroke-border group-hover:stroke-border group-hover:stroke-1 transition-all divide-neutral-400 ease-in-out' stroke-width="0.5"></path>
              </svg>
            </button>
            <div className='h-full content-center -mt-8 lg:hidden'>
              <Image className='w-6' src={VERTICAL_RULER} alt='vertical-ruler' />
            </div>
          </div>
        </div>

        <div className='absolute lg:left-16 bottom-0 flex flex-col w-[calc(100%-8%)] lg:w-full pr-1 bg-primary'>
          <div className='p-6 lg:px-4 flex items-center gap-16 border-t border-border'>
            <div><li className='text-xs lg:text-[9px] uppercase font-medium font-serif list-[square] whitespace-nowrap w-10'>connect</li></div>
            <div className='flex flex-col text-xs uppercase font-medium font-serif tracking-wide'>
              {/* <Link href={`https://www.linkedin.com/company/vignan-s-student-activity-council`} target='_blank'><TextScrambleHover text="linkedin" className='' /></Link> */}
              <Link href={`https://www.instagram.com/vsac.viit`} target='_blank'><TextScrambleHover text="instagram" className='' /></Link>
              <Link href={`mailto:yuvtarang2k25.viit@gmail.com`} target='_blank'><TextScrambleHover text="yuvtarang2k25.viit@gmail.com" className='' /></Link>
            </div>
          </div>
          <div className='p-6 lg:px-4 flex items-center gap-16 border-t border-border'>
            <div className='text-xs lg:text-[9px] uppercase font-medium font-serif list-[square] whitespace-nowrap w-10'>yuvtarang</div>
            <div className='text-xs uppercase font-medium font-serif list-[square] whitespace-nowrap text-[#4d3923]'>&copy; {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
