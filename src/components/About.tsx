import { section } from 'framer-motion/client'
import React from 'react'
import { ClasicalDancer, CricketPlayer, GuitarSinger, MusicGuitars, RangoliArt } from "@/components/Vectors/Icons";

const About = () => {
  return (
   <section id="about" className="flex  py-10 bg-[#B88A44]/60 gap-20">
    {/* <div>
    <CricketPlayer/>
    </div> */}
    <div className=" lg:text-left w-1/2 mx-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white">About Yuvtarang </h2>
                        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed text-justify transform hover:scale-[1.02] transition-transform duration-300">
                        Welcome to Yuvtarang - VIGNAN's IIT Annual Fest!

Step into an otherworldly experience where culture, music, art, food, and sports blend seamlessly. Yuvtarang 2025 carries forward a legacy built over the years, bringing together a vibrant mix of creativity and athleticism. Get ready for an unforgettable celebration of talent, passion, and togetherness!
                        </p>
                        <div className="space-y-6">
                            <div className="group flex items-center space-x-4 bg-yellow-900/30 p-4 rounded-lg hover:bg-yellow-900/50 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span className="text-lg text-white">February 21 & 22, 2025</span>
                            </div>
                            <div className="group flex items-center space-x-4 bg-yellow-900/30 p-4 rounded-lg hover:bg-yellow-900/50 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-lg text-white">VIGNAN's IIT, VSKP</span>
                            </div>
                        </div>
    </div>
    <div className='flex justify-center items-center'>
    <ClasicalDancer/>
    <ClasicalDancer/>

    {/* <GuitarSinger/> */}
    </div>
    </section>
  )
}

export default About