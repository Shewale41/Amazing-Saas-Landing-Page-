import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"


export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Image src={Logo} alt="saas logo" height={60} />
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
