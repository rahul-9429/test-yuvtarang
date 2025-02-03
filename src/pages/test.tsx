"use client";

import { motion } from "framer-motion";
import { RangoliArt, RangoliArt1 } from "@/components/Vectors/Icons";

const test = () => {
  return (
    <div>
        <motion.section
          className="relative w-full min-h-screen flex flex-col justify-between z-50 overflow-clip"
        //   initial={{ opacity: 0, y: 50 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 1 }}
        >
          

          {/* Animated Background Elements */}
          {/* <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-0 -z-[40] opacity-5"
          >
            <RangoliArt className="" />
          </div>
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-0 "
          >
            <RangoliArt1  className="!w-[80vw]"/>
          </div> */}

          <div
            className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-0 -z-[40] opacity-5"
            >
            <RangoliArt />
          </div>
          <div
              className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-0 "
          >
            <RangoliArt1  className="!w-[80vw]"/>
          </div>
    </motion.section>
    </div>
  )
}

export default test