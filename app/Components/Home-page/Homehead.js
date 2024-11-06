import React from 'react';

const Homehead = () => {
  return (
    <div className="mt-28 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
      <h1 className="mt-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight">
        Crafting digital experiences that inspire and engage.
      </h1>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 text-base sm:text-lg font-semibold">
        <h2 className="text-xl sm:text-2xl font-bold">Expertise:</h2>
        <h3 className="bg-gray-300 py-2 px-4 md:py-1 md:px-3 shadow-lg rounded-full hover:bg-black hover:text-white transition duration-200">
          Frontend
        </h3>
        <h3 className="bg-gray-300 py-2 px-4 md:py-1 md:px-3 shadow-lg rounded-full hover:bg-black hover:text-white transition duration-200">
          Basic Backend
        </h3>
      </div>
    </div>
  );
};

export default Homehead;
