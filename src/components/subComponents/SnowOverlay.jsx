import React from 'react';

const SnowOverlay = () => {
  return (
    <>
      <div className="absolute inset-0 animate-snowfall-1 opacity-70">
        {[...Array(50)].map((_, i) => (
          <div
            key={`snow-1-${i}`}
            className="snow-particle absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 animate-snowfall-2 opacity-50">
        {[...Array(30)].map((_, i) => (
          <div
            key={`snow-2-${i}`}
            className="snow-particle absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SnowOverlay;