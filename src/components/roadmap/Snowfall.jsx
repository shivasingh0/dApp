import React from 'react';
import { Snowflake } from 'lucide-react';

const Snowfall = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        >
          <Snowflake className="text-white/30" size={12} />
        </div>
      ))}
    </>
  );
};

export default Snowfall;