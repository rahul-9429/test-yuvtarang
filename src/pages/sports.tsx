
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import MagicButton from "@/components/Elements/MagicButton";
import { sports_events as events } from "@/lib/event-details";
import CULTURAL_SCHEDULE from "../../public/assets/images/cultural-schedule.jpeg"

const SportsEvent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("right");

    return (
        <div className="flex flex-col items-center max-container min-h-[calc(100vh-8.5rem)] text-[#3D2E2A]  ">
            <Head>
                <title>Sports Events | Yuvtarang 2k25 | A National Level Youth Festival</title>
            </Head>
            <div className="mx-auto max-w-7xl w-full">
                <div id='events' className='flex flex-col items-center justify-center text-center scroll-m-10'>
                    <MagicButton title='Sports Events' />
                    <p className='mt-3 max-w-[80rem] text-lg'>Experience the thrill of competition and teamwork at our college fest's sports events!</p>
                </div>
                <div className="flex lg:flex-col gap-6 mt-5">
                    {/* Tab Content on the Left */}
                    <div className="flex-1  rounded-lg border-2 border-[#C4B7A6] w-2/5 lg:w-full lg:min-h-60 overflow-clip group">
                        <motion.div
                            key={activeIndex}
                            initial={{ x: direction === "right" ? "100%" : "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: direction === "right" ? "-100%" : "100%" }}
                            transition={{ type: "spring", stiffness: 500, damping: 40 }}
                            className="space-y-4 relative overflow-clip"
                        >
                            {events[activeIndex].imgurl ? (
                                <Image
                                    className="w-full object-cover object-center transition-transform ease-in-out duration-700 transform-gpu group-hover:scale-105 h-[31rem] max-h-[31rem] lg:h-[16.6rem] overflow-clip"
                                    sizes="(max-width: 1180px) 100vw, 50vw"
                                    src={`/assets/images/gallery/${events[activeIndex].imgurl}`}
                                    alt={`${events[activeIndex].imgurl}`}
                                    quality={100}
                                    width={500}
                                    height={500}
                                />
                            ) : (
                                <div className="p-6 bg-[#271d12] h-[31rem] max-h-[31rem] lg:h-[16.6rem] overflow-clip">
                                    <h2 className="text-2xl font-semibold text-primary-light">{events[activeIndex].title}</h2>
                                    <p className="text-lg text-primary">{events[activeIndex].description}</p>
                                </div>
                            )}
                        </motion.div>

                    </div>

                    {/* Tab Titles on the Right */}
                    <div className="w-2/5 lg:w-full grid grid-cols-2 gap-2">
                        {events.map((event, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > activeIndex ? "right" : "left");
                                    setActiveIndex(index);
                                }}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out font-semibold font-sans ${activeIndex === index
                                    ? "bg-[#000] text-primary"
                                    : "bg-[#222] text-white hover:bg-[#000]"
                                    }`}
                            >
                                {event.title}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Register Button */}
                <div className="flex flex-col items-center justify-center md:mt-4 relative">
                    <Link target="_blank" href="/register" className="mt-10 sm:mt-0">
                        <button className="relative w-[180px] h-[40px] border-none rounded-[10px] bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-[250%] text-[#ffd277] flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden active:scale-95 hover:bg-right">
                            <span className="absolute top-0.5 w-[97%] h-[90%] rounded-[8px] flex items-center justify-center bg-black bg-opacity-80 transition-all duration-1000 hover:bg-right">
                                REGISTER NOW
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="my-10 border border-border rounded-md overflow-hidden">
                    <Image src={CULTURAL_SCHEDULE} alt="sports-schedule" />
                </div>
            </div>
        </div>
    );
};

export default SportsEvent