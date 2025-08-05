"use client";
import Image from "next/image";
import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import { motion , useScroll , useTransform } from "framer-motion";
import {useRef} from "react";

export const ProductShowcase = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } =useScroll({
    target: sectionRef, // section ref will provide the value of how much we've scrolled
    offset: ["start end","end start"], //this means that the effect will have working from the
    //  start of window to end of window (that particular section winodow)
  });
  const translateY = useTransform(scrollYProgress , [0,1],[150,-150]); //scrolly is used to track the scroll (ki kitna scroll kiya hai)

  return (
  <>
  <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip ">
    <div className="container">
      <div className=" section-heading ">
      <div className="flex justify-center ">
      <div className="tag">
        Boost your productivity
      </div>
      </div>
      <h2 className="section-title mt-5 ">A more effective way to track progress</h2>
      <p className="section-description mt-5 ">
        Effortlessly turn your ideas into fully functional,responsive,SaaS 
        website in just minutes with this template. 
      </p>
     </div> 
     <div className="relative">
     <Image src={ProductImage} alt="Product Image" width={1200} height={800}
       className="mt-10" />
     <motion.img src={PyramidImage.src} height={262} width={262} alt="pyramid image" 
     className="hidden absolute md:block -right-36 -top-32"
     style={{
      translateY,
     }}
     />
     <motion.img src={TubeImage.src} height={248} width={248} alt="tube image" 
     className="hidden md:block absolute bottom-24 -left-36 " 
     style={{
      translateY,
     }}
     />  
     </div>
    </div>
  </section>
  </>
  );
};
