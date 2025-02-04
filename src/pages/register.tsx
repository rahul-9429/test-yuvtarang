"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import REGISTER_QR_CODE from "../../public/assets/images/yuvtarang-qr-code.png";
import MagicButton from "@/components/Elements/MagicButton";

const Register = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("college");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get("category");
        if (category) setActiveTab(category);
    }, []);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        router.push(`/register?category=${tab}`, { scroll: false });
    };

    return (
        <div className="min-h-[calc(100vh-8.5rem)] max-container mb-20">
            <div className="space-y-3 mb-6">
                <Link href="/" className="hidden lg:flex items-center">
                    <button className="flex items-center p-3 py-2 border border-[--border] rounded-lg bg-[--primary] text-[--foreground] font-serif uppercase text-sm transition-all duration-200 ease-in-out hover:bg-[--primary-light] hover:text-[--footer] group">
                        <svg
                            className="w-5 h-5 group-hover:scale-110 transition-all duration-200 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 12H5m7 7l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Back</span>
                    </button>
                </Link>
                <div className="flex flex-col items-center justify-center">
                    <MagicButton title="Fest Registration" />
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex justify-center gap-4 mb-6">
                {["college", "external"].map((tab) => (
                    <motion.div
                        key={tab}
                        className={`cursor-pointer border border-[#ffd277] px-6 py-2 rounded-tl-xl rounded-br-xl rounded-md 
                            ${activeTab === tab ? "bg-footer text-primary" : "bg-primary-light text-footer"}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab === "college" ? "College Students" : "External Students"}
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="rounded-lg w-full max-w-7xl mx-auto ">
                {activeTab === "college" ? (
                    <>
                        <h2 className="text-2xl font-bold text-center font-serif uppercase tracking-wider border-b-2 border-[--border] pb-2">
                            College Students Registration
                        </h2>
                        <p className="text-neutral-600 mt-3 text-center">
                            Students from VIIT, VIEW, and VIPT must register at the respective registration desks.
                        </p>

                        <div className="grid grid-cols-3 md:grid-cols-1 gap-6 mt-6">
                            {/* VIIT */}
                            <div className="bg-[--primary-light] p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold border-b border-[--border] pb-2">VIIT</h3>
                                <ul className="list-disc ml-5 text-neutral-700 mt-2">
                                    <li>Desk 1: Ground Floor, Dharithri Block, VIIT</li>
                                    <li>Desk 2: G Foyer, Main Block, VIIT</li>
                                </ul>
                            </div>

                            {/* VIEW */}
                            <div className="bg-[--primary-light] p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold border-b border-[--border] pb-2">VIEW</h3>
                                <p className="text-neutral-700 mt-2">TBA</p>
                            </div>

                            {/* VIPT */}
                            <div className="bg-[--primary-light] p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold border-b border-[--border] pb-2">VIPT</h3>
                                <p className="text-neutral-700 mt-2">TBA</p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 bg-[--footer] text-white text-center p-3 rounded-lg">
                            <p className="text-[--primary]">For further inquiries, contact the registration desk.</p>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center font-serif uppercase tracking-wider border-b-2 border-[--border] pb-2">
                            External Students Registration
                        </h2>
                        <p className="text-neutral-600 mt-3 text-center">
                            Students from other colleges can register online using the link or QR code.
                        </p>

                        <div className="flex flex-col items-center justify-center mt-6 space-y-8">
                            {/* Register Button */}
                            <Link
                                target="_blank"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdwfi7gvDeimrba1SEJmtF4CE38J-AWXjb3n__BR55outWoIw/formrestricted"
                                className="w-full flex justify-center"
                            >
                                <button className="relative w-[200px] h-[45px] border-none rounded-[10px] bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] text-[#ffd277] flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden active:scale-95 hover:bg-right">
                                    <span className="absolute w-[97%] h-[90%] rounded-[8px] flex items-center justify-center bg-black bg-opacity-80 transition-all duration-1000 hover:bg-right">
                                        REGISTER
                                    </span>
                                </button>
                            </Link>

                            {/* QR Code */}
                            <div className="flex items-center justify-center my-4">
                                <div className="bg-[--footer] p-4 rounded-lg shadow-lg">
                                    <div className="-mb-4 h-12 w-full text-[--primary] text-center pt-2 bg-[--footer] text-xs uppercase font-serif tracking-wide">
                                        Register with QR
                                    </div>
                                    <Image
                                        src={REGISTER_QR_CODE}
                                        alt="qr-code"
                                        className="mix-blend-screen w-72 h-72 lg:w-60 lg:h-60"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 bg-[--footer] text-white text-center p-3 rounded-lg">
                            <p className="text-[--primary]">For more information, please visit the registration link.</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Register;
