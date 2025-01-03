import React from 'react';
import { Waves } from 'lucide-react';

const PolarBear = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      <div className="absolute inset-0 bg-white rounded-full transform-gpu animate-bounce-slow">
        {/* Body */}
        <div className="absolute inset-0 bg-white rounded-full" />
        
        {/* Face */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
          {/* Eyes */}
          <div className="flex space-x-6">
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
          </div>
          
          {/* Nose */}
          <div className="w-3 h-2 bg-gray-800 rounded-full mx-auto mt-2" />
        </div>

        {/* Paw waving */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 animate-wave">
          <Waves className="w-8 h-8 text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default PolarBear;