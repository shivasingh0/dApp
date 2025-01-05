import React from 'react';

const GlassCard = ({ children }) => {
  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.2)] transition-all duration-500">
      {children}
    </div>
  );
}

export default GlassCard;