// import React from 'react'
// import Button from './Button'

// const Round = () => {
//   return (
//     <div className="bg-[#3D3D3D] text-white bg-[linear-gradient(to_bottom,#3D3D3D,#3D3D3D_34%,#3D3D3D_65%,#3D3D3D_82%)] py-[52px] sm:py-16 relative overflow-clip">
//       <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-[#3D3D3D] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#3D3D3D_82%,#000)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
//       <div className="container relative">
//          <div className="w-full bg-[#3D3D3D] py-20 px-44 flex items-center gap-8">
//         <div
//           data-aos="zoom-in-right"
//           className="w-[40%]"
//         >
//           <img
//             src="/assets/polarBeer/feature.gif"
//             alt="featureImg"
//             className="scale-150 object-contain"
//           />
//         </div>
//         <div data-aos="zoom-in-up" className="flex flex-col gap-4">
//           <h1
//             className="text-white font-title text-[3rem] font-bold leading-none"
//           >
//             About
//             <br /> dApp Studio?
//           </h1>
//           <p
//             className="text-neutral-50 text-lg max-w-5xl"
//           >
//             At dApp Studio, we’ve been at the forefront of blockchain innovation
//             for the past ve years, delivering world-class decentralized
//             solutions. With over 100-200 successful projects under our belt,
//             we've had the privilege of collaborating with some of the biggest
//             names in the industry
//           </p>
//         </div>
//       </div>
//         <div className="flex justify-center mt-24">
//         <Button text={"Contact Us"} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Round

import React from 'react';
import Button from './Button';
import GlassCard from './subComponents/GlassCard';
import SnowOverlay from './subComponents/SnowOverlay';
import { Snowflake } from 'lucide-react';
import FlipImage from './subComponents/FlipImage';

const Round = () => {
  return (
    <div className="bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#475569] text-white py-24 relative overflow-hidden">
      <SnowOverlay />
      
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-100/10 blur-[120px] animate-pulse"></div>

      <div className="container relative mx-auto px-4">
        <GlassCard>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left side with 3D rotating image */}
            <div className="w-full lg:w-[40%]">
              <FlipImage
                imageSrc="/assets/polarBeer/feature.gif"
                alt="Winter landscape"
              />
            </div>

            {/* Right side content */}
            <div className="w-full lg:w-[60%] space-y-8">
              <div className="flex items-center gap-4">
                <Snowflake className="w-8 h-8 text-blue-200 animate-pulse" />
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300">
                  About dApp Studio
                </h1>
              </div>
              
              <p className="text-xl text-blue-50 leading-relaxed ">
                At dApp Studio, we've been at the forefront of blockchain innovation
                for the past five years, delivering world-class decentralized
                solutions. With over 100-200 successful projects under our belt,
                we've had the privilege of collaborating with some of the biggest
                names in the industry.
              </p>

              <div className="flex items-center gap-8">
                <Button text="Contact Us" />
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Round;