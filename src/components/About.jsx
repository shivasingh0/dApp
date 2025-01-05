import React from 'react';
import AboutCard from './subComponents/AboutCard';
import { aboutData } from '../data/FeatureData';

const About = () => {
  return (
    <div className="relative bg-gradient-to-t from-white to-sky-200 rounded-b-full min-h-[600px] p-8 backdrop-blur-sm">
      {/* Left-aligned text */}
      <div className="absolute left-40 top-48 -translate-y-1/2 -rotate-90">
        <h2 data-aos="zoom-in" className="text-sky-900 text-6xl font-bold tracking-wider">FEATURE</h2>
      </div>

      {/* Cards container */}
      <div className="flex justify-center items-center">
        <div data-aos="zoom-in" className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {aboutData.map((phase, index) => (
            <AboutCard key={index} phase={phase.phase} items={phase.items} />
          ))}
        </div>
      </div>

      {/* PolarBear image on the right */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex justify-center">
        <img
          className="w-[500px] h-[500px] object-contain"
          src="/assets/polarBeer/about.gif"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
