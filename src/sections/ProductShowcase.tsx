import Image from "next/image";
import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
  <>
  <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip ">
    <div className="container">
      <div className="max-w-[540px] mx-auto ">
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
     <Image src={PyramidImage} height={262} width={262} alt="pyramid image" className="hidden absolute md:block -right-36 -top-32"/>
     <Image src={TubeImage} height={240} alt="tube image" 
     className="hidden md:block absolute bottom-24 -left-36 " />  
     </div>
    </div>
  </section>
  </>
  );
};
