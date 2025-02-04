"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ClasicalDancer, CricketPlayer, GuitarSinger, MusicGuitars, RangoliArt } from "@/components/Vectors/Icons";
import Contact from "@/components/Event/Contact";
import Sponsors from "@/components/Event/Sponsors";
import Culturals from "@/components/Event/Culturals";
import CountdownTimer from "@/components/Elements/CountdownTimer";
import REGISTER_QR_CODE from "../../public/assets/images/yuvtarang-qr-code.png"

// Image Imports
import YUVTARANG_LOGO from "../../public/assets/images/yuvtarang-text.png";
import SQUAREPATTERN from "../../public/assets/images/squarepattern.png";

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
        <section ref={sectionRef} className="relative w-full min-h-[calc(100vh-8.5rem)] flex flex-col justify-between z-50">
          <div className="relative max-container flex flex-col w-full">
            <div ref={(el) => setElementRef(el, 0)} className="w-full space-y-10 lg:space-y-5 mt-5 max-container z-50 justify-items-center">
              {/* Optimized Image */}
              <div>
                <Image
                  src={YUVTARANG_LOGO}
                  alt="yuvtarang-2025"
                  width={2000}
                  height={2000}
                  className="w-full min-w-[40rem] md:min-w-0"
                  quality={75}
                  priority={true}
                />
              </div>

              <div ref={(el) => setElementRef(el, 1)}>
                <CountdownTimer />
              </div>

              {/* Optimized Date Box */}
              <div ref={(el) => setElementRef(el, 2)} className="flex items-center border-2 border-blue-800 w-96 lg:w-72 rounded text-xl lg:text-sm">
                <div className="w-1/2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-2 font-serif">
                  <div>
                    21<sup>st</sup> — 22<sup>nd</sup>
                  </div>
                </div>
                <div className="w-1/2 px-4 py-2 text-blue-800 font-serif uppercase">
                  <div>
                    February <span className="-mb-2">2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <div ref={(el) => setElementRef(el, 3)} className="flex flex-col items-center justify-center md:mt-4 relative">
              <Link target="_blank" href="/register" className="mt-10 sm:mt-0">
                <button className="relative w-[180px] h-[40px] border-none rounded-[10px] bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-[250%] text-[#ffd277] flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden active:scale-95 hover:bg-right">
                  <span className="absolute top-0.5 w-[97%] h-[90%] rounded-[8px] flex items-center justify-center bg-black bg-opacity-80 transition-all duration-1000 hover:bg-right">
                    REGISTER NOW
                  </span>
                </button>
              </Link>
              {/* <div className="hidden lg:flex items-center justify-center my-4">
                <div className="bg-footer p-1 rounded-lg">
                  <div className="-mb-4 h-12 w-full text-primary text-center pt-2 bg-footer text-xs uppercase font-serif tracking-wide">
                    Register with QR
                  </div>
                  <Image src={REGISTER_QR_CODE} alt="qr-code" className=" mix-blend-screen w-72 h-72 lg:w-60 lg:h-60" />
                </div>
              </div> */}
            </div>
            {/* <div className="absolute flex flex-col top-6 right-[5%] 2xl:right-[1%] lg:top-10 items-center justify-center my-4 lg:hidden">
              <div className="bg-footer p-1 rounded-lg">
                <div className="-mb-4 h-14 w-full text-primary text-center pt-2 bg-footer uppercase font-serif tracking-wide">
                  Register with QR
                </div>
                <Image src={REGISTER_QR_CODE} alt="qr-code" className=" mix-blend-screen w-72 h-72 lg:w-60 lg:h-60" />
              </div>
            </div> */}
          </div>

          {/* Animated Background Elements */}
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 -z-[40] opacity-5 lg:hidden">
            <RangoliArt />
          </div>
          <div className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-0 -z-[40] opacity-5 lg:hidden">
            <RangoliArt />
          </div>

          {/* Optimized Animated Figures */}
          {[ClasicalDancer, CricketPlayer, GuitarSinger, MusicGuitars].map((Component, index) => (
            <div
              key={index}
              ref={(el) => setElementRef(el, 4 + index)}
              className={`absolute bottom-0 ${index === 0 ? "right-[14%]" : index === 1 ? "right-4" : index === 2 ? "left-[18%]" : "left-4 flex -space-x-16"
                } -z-40 xl:hidden opacity-85 will-change-transform`}
            >
              <Component />
            </div>
          ))}
        </section>

        {/* Sponsors and Contact Info */}
        <section className="relative w-full min-h-screen flex flex-col justify-between mb-20">
          <div className="space-y-20 mt-10 max-container z-50">
            <Culturals />
            <Sponsors />
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
