import React, { useEffect, useState } from 'react';

const SnowfallEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const createSnowflake = () => {
      const id = Date.now();
      const size = 10 + Math.random() * 20; // Random size between 10-30px
      const left = Math.random() * 100; // Random horizontal position
      const duration = 5 + Math.random() * 10; // Random fall duration between 5-15s
      const delay = Math.random() * 5; // Random delay before falling
      const rotationDuration = 3 + Math.random() * 3; // Random rotation duration between 3-6s

      const style = {
        '--size': `${size}px`,
        '--left': `${left}%`,
        '--duration': `${duration}s`,
        '--delay': `${delay}s`,
        '--rotation-duration': `${rotationDuration}s`,
      };

      return { id, style };
    };

    // Create initial snowflakes
    const initialSnowflakes = Array.from({ length: 5 }, createSnowflake);
    setSnowflakes(initialSnowflakes);

    // Add new snowflakes periodically
    const interval = setInterval(() => {
      setSnowflakes(prev => [...prev.slice(-49), createSnowflake()]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map(({ id, style }) => (
        <div key={id} className="snow" style={style}>
          ❄️
        </div>
      ))}
    </div>
  );
};

export default SnowfallEffect;
