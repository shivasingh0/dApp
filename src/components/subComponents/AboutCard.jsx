import React from "react";

const AboutCard = ({ phase, items }) => {
  return (
    <div className="mb-6 bg-sky-50/90 rounded-lg p-4 backdrop-blur-sm shadow-lg border border-sky-100">
      <h3 className="text-sky-900 font-bold mb-2">{phase}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sky-800 flex items-center">
            <span className="mr-2 text-sky-500">❄</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutCard;
