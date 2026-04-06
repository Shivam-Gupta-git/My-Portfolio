import React, { memo } from 'react'
import { motion } from 'framer-motion'
import Mack from './Mack'
import RollingText from './RollingText'
import SoftwareInfo from './SoftwareInfo'
import CV from './CV'

const Hero = memo(({ isMobile }) => {
  return (
    <>
      <Mack isMobile={isMobile} />

      <section className="relative">
        {/* Scroll indicator */}
        <div className={`w-full flex justify-center items-center z-30 ${isMobile ? "py-8" : "absolute bottom-1"}`}>
          <a href="#about">
            <div className="w-[25px] h-[45px] sm:w-[30px] sm:h-[55px] rounded-3xl border-2 sm:border-[2.5px] border-slate-400 flex justify-center items-start p-1.5 sm:p-2 cursor-pointer hover:border-indigo-500 transition-colors">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-500 mb-1"
              />
            </div>
          </a>
        </div>

        {/* Below-fold content */}
        <div className="bg-[#F8F9FC]">
          <CV />
          <RollingText />
          <SoftwareInfo />
        </div>
      </section>
    </>
  )
})

export default Hero