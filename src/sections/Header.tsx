import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import React from "react";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
  <>
  {/* //this will be the sticky header  */}
    <header className="sticky top-0">
      {/* //super header the uppermost black header */}
        <div className="flex items-center justify-center bg-black text-white text-sm gap-3">
          {/* //mobile yeh hidden rahgea yaad rakhna */}
          <p className="text-white/60 hidden md:block">Streamline Your workflow and boost your productivity</p>
          <div className="inline-flex items-center gap-1">
           <p>Get Started with our Tool for Free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center " /> 
          </div>
        </div>
        {/* //navbar section */}
        <div className="py-5">
          <div className="container" >
            <div className="flex items-center justify-between">
          <Image src={Logo} alt="Saas Logo" height={40} width={40}/>
          {/* //hamburger menu so sirf mobile mein dikhega baki mein hidden */}
          <MenuIcon className="h-5 w-5 md:hidden "/>
          <nav className="hidden md:flex items-center gap-5 text-black/60 ">
            <a href="#">About</a>
            <a href="#">Customers</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <button className="bg-black text-white px-4 py-2 inline-flex font-medium rounded-lg items-center justify-center tracking-tight ">Get Started for free</button>
          </nav>
          </div>
          </div>
        </div>
    </header>    
  </>
  );
};
