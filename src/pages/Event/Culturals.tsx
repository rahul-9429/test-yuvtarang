"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import MagicButton from "@/components/Elements/MagicButton";
import { cultural_events as events } from "@/lib/event-details";

const Culturals = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("right");
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { x: direction === "right" ? "100%" : "-100%", opacity: 0 },
                { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
            );
        }
    }, [activeIndex, direction]);

    return (
        <div className="flex flex-col items-center text-[#3D2E2A]">
            <div className="mx-auto max-w-7xl w-full">
                <div id='events' className='flex flex-col items-center justify-center text-center scroll-m-10'>
                    <MagicButton title='Cultural Events' />
                    <p className='mt-3 max-w-[80rem] text-lg'>
                        Experience a vibrant celebration of art, music, dance, and creativity at our college fest's cultural events!
                    </p>
                    <Link href={"/culturals"} className='text-sm font-bold text-center font-serif tracking-tight underline underline-offset-4 hover:text-border hover:text-blue-700'>
                        Show More Details.
                    </Link>
                </div>

                <div className="flex lg:flex-col gap-6 mt-5">
                    {/* Tab Content on the Left */}
                    <div className="flex-1 rounded-lg w-2/5 lg:w-full lg:min-h-60 overflow-clip group">
                        <div ref={contentRef} className="space-y-4 relative overflow-clip">
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
                        </div>
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
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out font-semibold font-sans ${
                                    activeIndex === index
                                        ? "bg-[#000] text-primary"
                                        : "bg-[#222] text-white hover:bg-[#000]"
                                }`}
                            >
                                {event.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Culturals;
