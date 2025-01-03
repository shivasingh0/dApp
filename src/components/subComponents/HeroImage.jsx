import React from 'react';

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
      <img 
        src="/mascot.png" 
        alt="Polar Bear Mascot"
        className="w-full h-auto drop-shadow-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 to-transparent mix-blend-overlay" />
    </div>
  );
};

export default HeroImage;