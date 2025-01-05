import React from 'react';

const positionClasses = {
  'top-left': '-left-20 -top-20',
  'top-right': '-right-20 -top-20',
  'bottom-left': '-left-40 bottom-0',
  'bottom-right': '-right-40 bottom-0',
};

const LiquidCircle = ({ data, position }) => {
  return (
    <div className={`absolute ${positionClasses[position]} group`}>
      <div className="relative w-40 h-40">
        {/* Liquid effect circles */}
        <div className="absolute inset-0 bg-sky-200/30 rounded-full animate-pulse"></div>
        <div className="absolute inset-3 bg-sky-100/40 rounded-full animate-pulse [animation-delay:75ms]"></div>
        <div className="absolute inset-6 bg-white/50 rounded-full animate-pulse [animation-delay:150ms]"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur-sm rounded-full">
          <span className="text-3xl font-bold text-sky-900">{data.percentage}%</span>
          <span className="text-base text-sky-800">{data.label}</span>
        </div>
      </div>
    </div>
  );
};

export default LiquidCircle;
