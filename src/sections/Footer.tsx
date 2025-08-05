import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"


export const Footer = () => {
  return (
    <footer className="bg-black text-sm py-10 text-center text-[#BCBCBC]  ">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2
        before:bottom-0 before:blur before:h-full  before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute ">
        <Image src={Logo} alt="saas logo" height={60} className="relative" />
        </div>   
        <nav>
          <a href="#">About</a>
          <a href="#">Customers</a>
          <a href="#">Features</a>
          <a href="#">Billing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div>
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialYoutube />
          <SocialPin />
        </div>
        <p>&copy; 2025 @ Elevate ,Inc. All rights reserved </p>
      </div>
    </footer>
  );
};
