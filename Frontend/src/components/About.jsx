import React from 'react';

function About() {
  return (
    <>
      <div className="bg-gray-100 py-12 " id='about'>
        
        {/* Hero Section */}
        <div id="hero" className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-6">
              Discover the world with us. We are passionate about creating unique and unforgettable travel experiences tailored just for you.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img 
              src="About.jpg" 
              alt="About" 
              className="w-full h-auto max-h-[500px] object-contain rounded-lg" 
            />
          </div>
        </div>

        {/* Company Mission */}
        <div id="mission" className="container mx-auto px-4 mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
            Our mission is to deliver exceptional travel experiences by focusing on quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Core Values */}
        <div id="values" className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-orange-500">Excellence</h3>
            <p className="text-gray-700 mt-4">
              We strive for excellence in every aspect of our service, ensuring that you have a seamless and enjoyable travel experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-orange-500">Integrity</h3>
            <p className="text-gray-700 mt-4">
              Honesty and transparency are at the core of our business. We work with trusted partners to provide you with the best possible service.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-orange-500">Innovation</h3>
            <p className="text-gray-700 mt-4">
              We continuously innovate to offer unique travel experiences that inspire and delight our customers.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div id="cta" className="container mx-auto px-4 mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Ready to Explore?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Start your adventure with us today. Whether you’re looking for a relaxing beach vacation, an adventurous mountain trek, or a cultural city tour, we have the perfect package for you.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
