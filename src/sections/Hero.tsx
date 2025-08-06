//this use client will also us to use framer motion client components
"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {motion , useScroll ,useTransform , useMotionValueEvent } from "framer-motion";
import {useRef} from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
        target:heroRef,
        offset: ["start end" ,"end start"],
  });

  //On the basis of the scroll event we will translate the svg
  //parallex effect for noodle and cylinder
  const translateY = useTransform(scrollYProgress , [0,1],[150,-150]); //scrolly is used to track the scroll (ki kitna scroll kiya hai)

  //just for testing nd debugging
  // useMotionValueEvent( translateY ,"change",(latestValue) => 
  //   console.log(latestValue)
  //  );

  return (
    <>
        <section ref={heroRef} className="pt-8 pb-20 md:pt-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip ">
          <div className="container">
            {/* //in medium device it should be on left the cog image */}
            <div className="md:flex items-center">
            <div className="md:w-[476px] "  >
              <div className="tag">Version 2.0 is finally Here</div>
              {/* //making gradient text */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">PathWay To productivity</h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
              Take control of your tasks and unlock your full potential. Our platform simplifies your workflow so you can focus on what really matters—getting things done with ease and confidence.
              </p>
              <div className="flex items-center mt-[30px] gap-1 ">
                <button className="btn btn-primary ">Get Started for Free</button>
                <button className="btn btn-text gap-1 ">
                  <span>Learn More</span>
                  <ArrowRight ClassName="h-5 w-5"/>
                    </button>
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:w-[648px] md:flex-1 relative min-h-[600px] ">
              <motion.img src={cogImage.src} alt="cog Image" 
              className="md:absolute md:h-full md:w-auto md:-left-6 md:max-w-none lg:left-0  "
              animate={{
                 translateY:[-30,30],  //from up to down
              }}
              transition={{
                repeat: Infinity, //we want this to repeat infinitively
                repeatType: "mirror",
                duration:3,     //kitna time lega upar neche ke liye
                ease:"easeInOut"  //u can play w this attribute w ur choice
              }}
              /> 
              <motion.img src={cylinderImage.src} height={220} width={220} alt="cylinder Image" 
              className="hidden md:block -top-20 -left-32 md:absolute "
              style={{
                translateY: translateY,
              }}
              /> 
              <motion.img src={noodleImage.src} alt="noodle image" height={220} width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] "
              style={{
                rotate:30,
                translateY: translateY,
              }}
              />
            </div>
            </div> 
          </div>
        </section>
    </>
  );
};
