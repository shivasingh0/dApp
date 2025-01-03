import React from 'react';
import Web3Icons from './Web3Icons';
// import Button from './Button';

const HeroContent = () => {
  return (
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Building the Future of Web3 with the Strength of the Arctic
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Secure, scalable, and sustainable blockchain solutions for the next generation
      </p>
      
      {/* <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div> */}

      <Web3Icons />
    </div>
  );
};

export default HeroContent;