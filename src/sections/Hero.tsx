import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  return (
    <>
        <section className="pt-8 pb-20 md:pt-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip ">
          <div className="container">
            {/* //in medium device it should be on left the cog image */}
            <div className="md:flex items-center">
            <div className="md:w-[476px] "  >
              <div className="inline-flex border border-black-[#222]/10 px-3 py-1 text-sm rounded-lg ">Version 2.0 is finally Here</div>
              {/* //making gradient text */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">PathWay To productivity</h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus alias tempore consequatur commodi corporis   voluptatibus dignissimos perspiciatis nisi.
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
              <Image src={cogImage} alt="cog Image" className="md:absolute md:h-full md:w-auto md:-left-6 md:max-w-none lg:left-0  " /> 
              <Image src={cylinderImage} height={220} width={220} alt="cylinder Image" 
              className="hidden md:block -top-8 -left-32 md:absolute " /> 
              <Image src={noodleImage} alt="noodle image" height={220} width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] "/>
            </div>
            </div> 
          </div>
        </section>
    </>
  );
};
