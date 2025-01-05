import React from 'react';
import MarqueeItem from './subComponents/MarqueeItem';

const Marquee = ({ direction = 'left', speed = 20 }) => {
  const items = Array.from({ length: 10 }, (_, i) => i);
  const bgColor = direction === 'left' ? 'bg-[#3D3D3D]' : 'bg-[#014DDF]';
  
  return (
    <div className={`relative flex overflow-hidden ${bgColor} scale-105`}>
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${speed}s`, animationDirection: direction === 'left' ? 'normal' : 'reverse' }}
      >
        {items.map((item) => (
          <MarqueeItem key={item} index={item} />
        ))}
      </div>
      <div
        className="absolute top-0 flex animate-marquee2 whitespace-nowrap"
        style={{ animationDuration: `${speed}s`, animationDirection: direction === 'left' ? 'normal' : 'reverse' }}
      >
        {items.map((item) => (
          <MarqueeItem key={item} index={item} />
        ))}
      </div>
    </div>
  );
}

export default Marquee;