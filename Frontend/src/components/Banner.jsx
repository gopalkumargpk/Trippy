import React from 'react';

function Banner() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
          <div className="space-y-6 md:space-y-9">
            {/* Highlighted Text */}
            <p className="text-lg md:text-xl font-bold uppercase tracking-wide" style={{ color: 'rgb(222, 178, 134)' }}>
              Best Destinations Around The World
            </p>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800">
              Hello, Travel enjoy<br />
              and live a new and<br />
              <span style={{ color: 'rgb(222, 178, 134)' }}>full life!!!</span>
            </h1>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img 
            src="/Banner.png" 
            alt="Banner" 
            className="w-full h-auto max-h-[500px] object-contain rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
