import React from "react";

const About = () => {
  return (
    <>
    <div id="why-us" className="text-center p-6">
      <h1 data-aos="zoom-in" className="text-[#3D3D3D] font-title text-[5rem] font-bold leading-none">Why Choose dApp Studio?</h1>
    </div>
      <div className="relative grid gap-5 md:grid-cols-2 max-w-6xl mx-auto mb-40 p-6">
        <div data-aos="flip-left" className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gradient-to-b from-sky-200 to-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-4">
            <h2 className="text-[#3D3D3D] font-bold text-lg">
              Quick Turnaround Time
            </h2>
          </div>
          <div className="p-4 bg-white">
            <p className="text-[#3D3D3D]">
              From concept to deployment, we deliver projects efciently without
              compromising quality.In fact, we can complete certain projects
              within 24-48 hours to meet your urgent needs.
            </p>
          </div>
        </div>
        <div data-aos="flip-right" className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gradient-to-b from-sky-200 to-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-4">
            <h2 className="text-[#3D3D3D] font-bold text-lg">
              Professional Team
            </h2>
          </div>
          <div className="p-4 bg-white">
            <p className="text-[#3D3D3D]">
              Our skilled developers, designers, and blockchain experts bring
              years of experience and creativity to every project.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gradient-to-b from-sky-200 to-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-4">
            <h2 className="text-[#3D3D3D] font-bold text-lg">
              Seamless Web3 Integration
            </h2>
          </div>
          <div className="p-4 bg-white">
            <p className="text-[#3D3D3D]">
              We ensure your dApps and websites run smoothly across popular
              blockchain ecosystems like Ethereum, Solana, and Binance Smart
              Chain.
            </p>
          </div>
        </div>
        <div data-aos="flip-right" className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gradient-to-b from-sky-200 to-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-4">
            <h2 className="text-[#3D3D3D] font-bold text-lg">
              End-to-End Support
            </h2>
          </div>
          <div className="p-4 bg-white">
            <p className="text-[#3D3D3D]">
              We provide comprehensive support throughout your project, from
              initial brainstorming to post-launch maintenance, ensuring
              everything runs smoothly.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gradient-to-b from-sky-200 to-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-4">
            <h2 className="text-[#3D3D3D] font-bold text-lg">
              Custom Smart Contracts
            </h2>
          </div>
          <div className="p-4 bg-white">
            <p className="text-[#3D3D3D]">Secure, scalable, and tailored to your unique needs.</p>
          </div>
        </div>
        <div data-aos="flip-right" className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gradient-to-b from-sky-200 to-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-4">
            <h2 className="text-[#3D3D3D] font-bold text-lg">
              User-Friendly Interfaces:
            </h2>
          </div>
          <div className="p-4 bg-white">
            <p className="text-[#3D3D3D]">
              We design intuitive, visually stunning UIs to enhance your users'
              experience.
            </p>
          </div>
        </div>

        {/* Decorative Image */}
        <div data-aos="zoom-in-left" className="absolute -bottom-40 left-1/2 w-full flex justify-center -translate-x-1/2 ">
          <img className="w-[500px] h-[500px] mt-10" src="/assets/polarBeer/about.gif" alt="about" />
        </div>
      </div>
    </>
  );
};

export default About;
