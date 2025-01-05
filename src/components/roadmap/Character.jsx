import React from 'react';

const Character = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=300"
        alt="Astronaut"
        className="absolute -top-20 -right-10 w-48 h-48 object-contain animate-float"
      />
      <img
        src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=300"
        alt="Astronaut"
        className="absolute -bottom-16 -left-10 w-32 h-32 object-contain animate-float-delayed transform -scale-x-100"
      />
    </>
  );
};

export default Character;