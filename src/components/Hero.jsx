import React from "react";
import { Waves } from "lucide-react";
import Button from "./Button";
import SnowfallEffect from "./subComponents/SnowfallEffect";
import { BackgroundText } from "./subComponents/BackgroundText";

export const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-sky-100 to-white relative overflow-hidden">
      {/* Snowy Texture Background */}
      <div className="absolute inset-0 opacity-20" />

      {/* Snowfall Animation */}
      <SnowfallEffect />

      <div className="container mx-auto px-4 relative">
        <div className="relative pt-20 pb-32">
          {/* Background Text */}
          <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="1000" className="absolute w-full flex justify-center items-center">
            {/* <h1 className="text-[#3D3D3D] font-sans text-[12rem] font-black tracking-tighter select-none">
              DAPP STUDIO
            </h1> */}
            <BackgroundText />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Polar Bear Image */}
            <div className="relative flex w-full top-24 max-w-3xl mx-auto">
              <img
                src="/assets/polarBeer/wave.gif"
                alt="Polar Bear"
                className="w-full h-auto rounded-3xl"
                data-aos="fade-up"
                data-aos-delay="200"
              />

              {/* <div className="flex-1 flex justify-center items-center">
                <PolarBear />
              </div> */}

              {/* Floating Blockchain Icons */}
              <div className="absolute -right-12 top-1/4 animate-bounce">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <Waves className="w-8 h-8 text-sky-500" />
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="w-full max-w-4xl mx-auto -mt-20">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-12">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-800 max-w-md">
                    Building the Future of Web3 with the Strength of the Arctic
                  </h2>
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
