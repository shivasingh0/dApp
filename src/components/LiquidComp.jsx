import React from 'react';
import LiquidCircle from './subComponents/LiquidCircle';
import { liquidData } from '../data/liquidData';

const LiquidComp = () => {
  return (
    <div className="relative bg-gray-100 rounded-t-full min-h-[600px] p-8 overflow-hidden backdrop-blur-sm mt-8">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-sky-900">TOKENOMICS</h2>
        <p className="text-sky-700 mt-2">Understanding the FrogCoin Economy</p>
      </div>

      {/* Center container for the frog image */}
      <div className="relative w-96 h-96 mx-auto mt-40">
        {/* Liquid circles */}
        <LiquidCircle data={liquidData[0]} position="top-left" />
        <LiquidCircle data={liquidData[1]} position="top-right" />
        <LiquidCircle data={liquidData[2]} position="bottom-left" />
        <LiquidCircle data={liquidData[3]} position="bottom-right" />

        {/* Frog image in the center */}
        
      </div>
      <div className="absolute top-1/2 inset-0 flex items-center justify-center">
          <img
            src="/assets/polarBeer/laptop.gif"
            alt="laptop"
            className=""
            data-aos="zoom-in" 
          />
        </div>
    </div>
  );
};

export default LiquidComp;
