"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge"; //w this tailwind merge we can the take the second value of a css when there exists a same property in the className Section
import {motion} from "framer-motion";

//sample data for pricing component
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <>
    <section className="py-24 bg-white ">
      <div className="container" >
        <div className="section-heading">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5 ">
          Free forever.Upgrade for better security,unlimited tasks and exclusive
          features.
        </p>
        </div>
        {/* //the pricing charts here  */}
        {/* in the large devices the these pricing sections these divs will be in single line at bottom in ascending order */}
        <div className=" flex flex-col gap-5 items-center mt-10 lg:flex-row lg:items-end lg:justify-center ">
            {pricingTiers.map(({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features
            }) => (
              <div className={twMerge("card" , inverse===true && ' border-black bg-black text-white ' )} >
                <div className="flex justify-between" >
                <h3 className={twMerge("text-lg font-bold text-black/50 ",inverse===true && 'text-white/50')} >{title}</h3>
                {/* this popular tag will only be for that one pricing section thats actually populr */}
                {/* //in this span tag we will our rainbow effect ma-ma-magic starting and ending on the same color and in-between 4 colours */}
                { popular===true && ( <div className=" inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 ">
                 <motion.span 
                  animate={{
                    backgroundPositionX : "-100%",
                  }}
                  transition={{
                    duration:1,
                    repeat:Infinity,
                    repeatType:"loop",
                    ease:"linear",
                  }}
                  className=" bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text "> popular </motion.span>
                </div> ) }
                
                </div>
                <div className="flex items-baseline gap-1 mt-[30px] " >
                  <span className="text-4xl font-bold tracking-tighter leading-none " >${monthlyPrice}</span>
                  <span className="tracking-tight font-bold text-black/50 ">/month</span>
                </div>
                <button className={twMerge("btn btn-primary mt-[30px] w-full ",inverse===true && "text-black bg-white " )}>{buttonText}</button>
                <ul className="flex flex-col gap-5 mt-8 " >
                  {features.map((feature)=>(
                    <li className=" text-sm flex items-center gap-3.5 ">
                     <CheckIcon className="h-6 w-6"/>
                     <span> {feature} </span>  
                    </li>
                  ))}
                </ul>
              </div>
            ) )}
        </div>
      </div>
    </section>
    </>
  );
};
