import React from 'react';
import Snowfall from './Snowfall';
import PhaseCard from './PhaseCard';
import Character from './Character';
import "./Roadmap.css"

const phases = [
  {
    number: '01',
    items: ['Launch Program', 'Challenge Listing'],
  },
  {
    number: '02',
    items: ['Website Launch', 'Community Listing'],
  },
  {
    number: '03',
    items: ['Program Events', 'Eco Development'],
  },
  {
    number: '04',
    items: ['Global Launch', 'Partnership Program'],
  },
];

const RoadmapCircle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-blue-950 flex items-center justify-center p-8 relative overflow-hidden">
      <Snowfall />
      
      <div className="relative max-w-4xl w-full">
        {/* Waving Circle */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full animate-wave" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/10 to-transparent rounded-full animate-wave-delayed" />

        {/* Main Content Circle */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-full aspect-square p-12 border border-white/20">
          {/* <Character /> */}
          
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-4xl font-bold text-white tracking-widest [writing-mode:vertical-lr] rotate-180">
            ROADMAP
          </div>

          <div className="h-full flex flex-col justify-center ml-16">
            {phases.map((phase) => (
              <PhaseCard key={phase.number} {...phase} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCircle;