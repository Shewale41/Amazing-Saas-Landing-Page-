import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";


//the section heading has the relative position 
//so if someone wants to adjust the spring and star they can easily w their prefered absolute values
export const CallToAction = () => {
  return (
         <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-cip ">
          <div className="container" >
            <div className="section-heading relative">
            <h2 className="section-title">Sign up for free today</h2>
            <p className="section-description mt-5 ">
              Celebrate karo the joy of accmplistments witha an app designed to track your progress and 
              motivate your efforts.
            </p>
            <Image src={starImage} alt='star Image' width={360}
             className="absolute -left-[350px] -top-[137px] "/>
            <Image src={springImage} alt="spring Image" width={360}
             className="absolute -right-[331px] -top-[19px] " />
            </div>
            <div className="flex justify-center mt-10 gap-2.5 ">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1 ">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5 " />
              </button>    
            </div>
          </div>
         </section>
         );
};
