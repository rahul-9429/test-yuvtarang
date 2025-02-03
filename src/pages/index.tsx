"use client";

import { motion } from "framer-motion";
import { ClasicalDancer, CricketPlayer, GuitarSinger, MusicGuitars, RangoliArt } from "@/components/Vectors/Icons";
import Head from "next/head";
import YUVTARANG_LOGO from "../../public/assets/images/yuvtarang-text.png"
import Image from 'next/image'
import Contact from "@/components/Event/Contact";
import Sponsors from "@/components/Event/Sponsors";
import SQUAREPATTERN from "../../public/assets/images/squarepattern.png"
import Culturals from "@/components/Event/Culturals";
import CountdownTimer from "@/components/Elements/CountdownTimer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* <div className="fixed top-0 w-full h-screen bg-gradient-to-b from-primary-light to-primary -z-10"></div> */}
      <main className={`z-50 overflow-clip`}>
        <Head>
          <title>{`Yuvtarang | A National Level Youth Festival`}</title>
        </Head>
        {/* image horizontal ruler */}
        <div className="overflow-hidden">
          <div className="flex items-center justify-center w-full -mx-3 h-6 select-none">
            {[...Array(320)].map((_, index) => (
              <div key={index} className="flex-none p-px">
                <Image src={SQUAREPATTERN} alt={`square-${index}`} width={100} height={100} className="w-5" />
              </div>
            ))}
          </div>
        </div>
        {/* main section */}
        <motion.section
          className="relative w-full min-h-[calc(100vh-8.5rem)] flex flex-col justify-between z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col">
            <motion.div
              className="w-full space-y-10 lg:space-y-5 mt-5 max-container z-50 justify-items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src={YUVTARANG_LOGO}
                  alt="yuvtarang-2025"
                  width={2000}
                  height={2000}
                  className="w-full min-w-[40rem] md:min-w-0"
                  quality={100}
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <CountdownTimer />
              </motion.div>

              <motion.div
                className="flex items-center border-2 border-blue-800 w-96 lg:w-72 rounded text-xl lg:text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.09 }}
              >
                <div className="w-1/2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-2 !font-serif">
                  <div>
                    21<sup>st</sup> — 22<sup>nd</sup>
                  </div>
                </div>
                <div className="w-1/2 px-4 py-2 text-blue-800 !font-serif uppercase">
                  <div>February <span className="-mb-2">2025</span></div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center md:mt-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              >
              <Link target="_blank" href="/register" className="mt-10 sm:mt-0">
                <motion.button
                  className="relative w-[180px] h-[40px] border-none rounded-[10px] bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-[250%] text-[#ffd277] flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden active:scale-95 hover:bg-right"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute top-0.5 w-[97%] h-[90%] rounded-[8px] flex items-center justify-center bg-black bg-opacity-80 transition-all duration-1000 hover:bg-right">
                    REGISTER NOW
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 -z-[40] opacity-5"
            >
            <RangoliArt />
          </div>

          <div
            className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-0 -z-[40] opacity-5"
          >
            <RangoliArt />
          </div>

          <motion.div
            className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-[14%] -z-[40] xl:hidden !opacity-85"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <ClasicalDancer />
          </motion.div>

          <motion.div
            className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-4 -z-[40] xl:hidden !opacity-85"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <CricketPlayer />
          </motion.div>

          <motion.div
            className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 left-[18%] -z-[40] xl:hidden !opacity-85"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <GuitarSinger />
          </motion.div>

          <motion.div
            className="absolute flex -space-x-16 transform translate-x-1/2 translate-y-1/2 bottom-0 left-4 -z-[40] xl:hidden !opacity-85"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <MusicGuitars />
          </motion.div>
        </motion.section>
        {/* sponsors and contact info */}
        <section className="relative w-full min-h-screen flex flex-col justify-between mb-20">
          <div className="space-y-20 mt-20 max-container z-50">
            <Culturals />
            <Sponsors />

            <Contact />
          </div>
        </section>
        {/* <section className="relative w-full min-h-[calc(100vh-8.5rem)] flex flex-col justify-between">
          <div className="space-y-20 mt-10 max-container z-50">

          </div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 z-[40] opacity-5">
            <RangoliArt className="" />
          </div>
          <div className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-0 z-[40] opacity-5">
            <RangoliArt className="" />
          </div>
        </section> */}
      </main>
    </div>
  );
}
