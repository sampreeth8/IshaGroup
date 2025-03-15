import React from 'react';

function Hero() {
  return (
    <div className="relative bg-purple-900">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Discover Traditional</span>
            <span className="block text-purple-200">Indian Fashion</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-purple-100">
            Explore our exclusive collection of authentic Indian dresses, crafted with finest fabrics and traditional designs.
          </p>
          <div className="mt-10">
            <a
              href="#collection"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-purple-50"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;