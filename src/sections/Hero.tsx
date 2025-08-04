import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
        <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] ">
          <div className="container">
            <div className="md:flex">
            <div  >
              <div className="inline-flex border border-black-[#222]/10 px-3 py-1 text-sm rounded-lg ">Version 2.0 is finally Here</div>
              {/* //making gradient text */}
              <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">PathWay To productivity</h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus alias tempore consequatur commodi corporis   voluptatibus dignissimos perspiciatis nisi.
              </p>
              <div className="flex items-center mt-[30px] gap-1 ">
                <button className="btn btn-primary ">Get Started for Free</button>
                <button className="btn btn-text gap-1">
                  <span>Learn More</span>
                  <ArrowRight ClassName="h-5 w-5"/>
                    </button>
              </div>
            </div>
            <div className="mt-20">
              <Image src={cogImage} alt="cog Image"/> 
            </div>
            </div> 
          </div>
        </section>
    </>
  );
};
