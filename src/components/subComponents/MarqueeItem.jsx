import React from 'react';
import { Coins } from 'lucide-react';

const MarqueeItem = ({ index }) => {
  return (
    <div className="mx-4 p-4 flex items-center space-x-2">
      {/* <Coins className={`w-6 h-6 ${index % 2 === 0 ? 'text-green-500' : 'text-yellow-400'}`} /> */}
      <span className="text-white font-bold text-xl">DAPP STUDIO</span>
    </div>
  );
}

export default MarqueeItem;