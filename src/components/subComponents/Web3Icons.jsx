import React from 'react';
import { Link, Blocks, Coins } from 'lucide-react';

const Web3Icons = () => {
  const iconClass = "w-8 h-8 text-blue-600 animate-pulse";
  
  return (
    <div className="flex gap-8 mt-12 justify-center md:justify-start">
      <Link className={`${iconClass}`} />
      <Blocks className={`${iconClass} delay-100`} />
      <Coins className={`${iconClass} delay-200`} />
    </div>
  );
};

export default Web3Icons;