import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import acmeLogo from "@/assets/logo-acme.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";

export const LogoTicker = () => {
  return <>
      <div className="py-8 md:py-12 bg-white " >
        <div className="container">
          {/* //from this mask image there will be a effect where center images will be brighther and end points are very light literally transparent */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] " >
          <div className="flex flex-none gap-14 " >
            <Image src={celestialLogo} alt="celestial Logo" className="logo-ticker-image"/>
            <Image src={acmeLogo} alt="acme Logo" className="logo-ticker-image"/>
            <Image src={pulseLogo} alt="pulse Logo" className="logo-ticker-image"/>
            <Image src={echoLogo} alt="echo Logo" className="logo-ticker-image"/>
            <Image src={apexLogo} alt="apex Logo" className="logo-ticker-image"/>
            <Image src={quantumLogo} alt="quantum Logo" className="logo-ticker-image"/>
          </div>
          </div>
        </div>
      </div>
  </> ;
};
