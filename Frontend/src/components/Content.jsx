import React from 'react';

function Contact() {
  return (
    <>
      <div className="bg-gray-100 py-12" id="content">
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6">
              Have questions or need assistance? We’re here to help. Get in touch with us to start planning your next adventure.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img 
              src="Contact.jpg" 
              alt="Contact" 
              className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-lg" 
              style={{ boxShadow: 'none' }} 
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="container mx-auto px-4 mt-12 md:mt-16">
          <div className="bg-white/60 p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Get in Touch
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900" 
                    placeholder="Your Email" 
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900" 
                    placeholder="Your Message" 
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6 md:mt-8 text-center">
                <button 
                  type="submit" 
                  className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Details and Call to Action */}
        <div className="container mx-auto px-4 mt-12 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Contact Details */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Our Contact Details
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-2">
              Phone: +91 6204421818
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-2">
              Email: imgopal0101@gmail.com
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Address: Dhanbad, Jharkhand
            </p>
          </div>

          {/* Call to Action */}
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to Explore?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              We’re excited to help you plan your next adventure. 
              Let’s make your dream trip a reality.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
              Start Planning
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
