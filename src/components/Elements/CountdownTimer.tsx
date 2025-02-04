"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const eventDate = new Date("2025-02-21T18:00:00");
        const currentTime = new Date();
        const difference = eventDate.getTime() - currentTime.getTime();

        if (difference > 0) {
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => {
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center  text-yellow-400 px-6 relative">
            {/* Glowing Background Accent */}
            {/* <div className="absolute w-96 h-96 bg-yellow-500 blur-3xl opacity-20 rounded-full -top-80 lg:top-0 left-1/2 transform -translate-x-1/2 -z-[40]"></div> */}
            {/* Countdown Timer */}
            <div className="flex gap-6 lg:gap-2">
                {Object.entries(timeLeft).map(([unit, value], index) => (
                    <motion.div
                        key={unit}
                        className={`relative p-8 2xl:p-6 rounded-lg shadow-2xl bg-footer w-52 h-28 2xl:w-20 2xl:h-16 -space-y-px lg:-space-y-1 flex flex-col items-center justify-center backdrop-blur-xl text-center`}
                    >
                        {/* Glowing Effect */}
                        <motion.div
                            className="absolute inset-0 bg-yellow-500 opacity-10 blur-2xl rounded-lg"
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        ></motion.div>

                        <motion.span
                            className="block text-5xl 2xl:text-2xl sm:text-3xl font-bold text-yellow-400 drop-shadow-xl font-serif"
                            key={value}
                        >
                            {value}
                        </motion.span>
                        <p className="text-2xl 2xl:text-xs text-primary-light uppercase font-serif tracking-widest mt-2">
                            {unit}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
