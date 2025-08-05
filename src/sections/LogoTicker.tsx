
"use client";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import acmeLogo from "@/assets/logo-acme.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion"

export const LogoTicker = () => {
  return <>
      <div className="py-8 md:py-12 bg-white " >
        <div className="container">
          {/* //from this mask image there will be a effect where center images will be brighther and end points are very light literally transparent */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] " >
          <motion.div className="flex flex-none gap-14 pr-14 "
          animate={{
            translateX : '-50%',  //this make it flow from right to left
          }}
          transition={{
            duration:18,
            repeat : Infinity,
            ease : "linear",
            repeattype : "loop",  //w this loop the right to left sliding will be in a loop
          }}
          >
            <Image src={celestialLogo} alt="celestial Logo" className="logo-ticker-image"/>
            <Image src={acmeLogo} alt="acme Logo" className="logo-ticker-image"/>
            <Image src={pulseLogo} alt="pulse Logo" className="logo-ticker-image"/>
            <Image src={echoLogo} alt="echo Logo" className="logo-ticker-image"/>
            <Image src={apexLogo} alt="apex Logo" className="logo-ticker-image"/>
            <Image src={quantumLogo} alt="quantum Logo" className="logo-ticker-image"/>
            {/* the below images are same logos using them to have long and loop type effect sliding logos as we have less logos 😢 */}
            <Image src={celestialLogo} alt="celestial Logo" className="logo-ticker-image"/>
            <Image src={acmeLogo} alt="acme Logo" className="logo-ticker-image"/>
            <Image src={pulseLogo} alt="pulse Logo" className="logo-ticker-image"/>
            <Image src={echoLogo} alt="echo Logo" className="logo-ticker-image"/>
            <Image src={apexLogo} alt="apex Logo" className="logo-ticker-image"/>
            <Image src={quantumLogo} alt="quantum Logo" className="logo-ticker-image"/>
          </motion.div>
          </div>
        </div>
      </div>
  </> ;
};
