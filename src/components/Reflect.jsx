import React from "react";

const Reflect = () => {
  return (
    <div className="min-h-screen p-8 mt-20">
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="relative w-full top-0 flex justify-center items-center"
      >
        <h1 className="text-[#3D3D3D] font-sans text-[8rem] font-black ">
          DAPP STUDIO
        </h1>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-between gap-95">
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="500"
            className="w-[200px] transform -rotate-12 relative -top-48 h-[200px] bg-gradient-to-b from-sky-100 to-sky-300 rounded-l-full rounded-t-full"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="700"
            data-aos-duration="500"
            className="w-[200px] relative -top-10 h-[200px] bg-gradient-to-b from-sky-100 to-sky-300 rounded-l-full rounded-b-full"
          ></div>
        </div>

        <div className="relative">
          {/* Original Image */}
          <img
            src="/assets/polarBeer/laptop.gif"
            alt="Polar Bear with Laptop"
            className="w-[500px] h-auto"
            data-aos="zoom-in"
            data-aos-duration="500"
          />

          {/* Reflection */}
          <div className="relative mt-1">
            <img
              src="/assets/polarBeer/laptop.gif"
              alt="Reflection"
              className="w-[500px] h-[500px] object-cover transform scale-y-[-1] opacity-30"
              style={{
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,1) -100%, rgba(0,0,0,0))",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0))",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-95">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="500"
            className="w-[200px] transform rotate-12 relative -top-48 h-[200px] bg-gradient-to-b from-sky-100 to-sky-300 rounded-r-full rounded-t-full"
          ></div>
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="700"
            className="w-[200px] transform -rotate-12 relative -top-10 h-[200px] bg-gradient-to-b from-sky-100 to-sky-300 rounded-r-full rounded-b-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Reflect;
