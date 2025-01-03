import React from 'react';

export function FeatureCard({ title, description, Icon }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50">
      <div className="relative mb-4">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 rounded-lg blur opacity-25"></div>
        <div className="relative bg-white p-4 w-fit rounded-lg">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}