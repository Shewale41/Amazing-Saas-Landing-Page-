import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import socialInsta from "@/assets/social-insta.svg";
import socialX from "@/assets/social-x.svg";
import socialLinkedin from "@/assets/social-linkedin.svg";
import socialPin from "@/assets/social-pin.svg"
import socialYoutube from "@/assets/social-youtube.svg"


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
          <socialX />
          <socialInsta />
          <socialLinkedin />
          <socialYoutube />
          <socialPin />
        </div>
        <p>&copy; 2025 @ Gopal Shewale , Inc .All rights reserved </p>
      </div>
    </footer>
  );
};
