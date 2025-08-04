

export const Hero = () => {
  return (
    <>
        <section>
          <div className="container">
            <div  >
              <div className="inline-flex border border-black-[#222]/10 px-3 py-1 text-sm rounded-lg ">Version 2.0 is finally Here</div>
              {/* //making gradient text */}
              <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#00E80] text-transparent bg-clip-text mt-6 ">PathWay To productivity</h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus alias tempore consequatur commodi corporis   voluptatibus dignissimos perspiciatis nisi.
              </p>
              <div className="flex items-center mt-[30px] gap-1 ">
                <button className="btn btn-primary ">Get Started for Free</button>
                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};
