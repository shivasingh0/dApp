import React from 'react';
import { Snowflake } from 'lucide-react';

const FlipImage = ({ imageSrc, alt }) => {
    console.log(imageSrc)
  return (
    <div className="relative group perspective-1000">
      <div className="relative transform-gpu transition-transform duration-1000">
        <div className="absolute top-[-220px]">
          <img
            src='/assets/polarBeer/feature.gif'
            alt={alt}
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl flex items-center justify-center">
          <Snowflake size={80} className="text-white animate-float" />
        </div>
      </div>
    </div>
  );
};

export default FlipImage;