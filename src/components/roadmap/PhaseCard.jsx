import React from 'react';

const PhaseCard = ({ number, items }) => {
  return (
    <div className="group relative mb-8 last:mb-0 transition-all duration-300 hover:scale-105">
      <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl font-bold text-blue-200">
        {number}
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="text-blue-100 flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhaseCard;