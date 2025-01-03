import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
  
    <footer className="w-full">
      <div className="w-full bg-gradient-to-b from-white to-sky-100 relative overflow-hidden">
      {/* Snowy Texture Background */}
      <div className="absolute inset-0 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex  items-center justify-between gap-8">
          {/* Left side with image */}
          <div data-aos="fade-right"  data-aos-duration="2000" className="relative  w-full md:w-1/3">
            <img 
              src="/assets/polarBeer/footer.gif"
              alt="Snowy Landscape"
              className="w-full rounded-lg "
            />
          </div>

          {/* Center content */}
          <div className="text-center md:text-left md:w-1/3">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-6">
              Join us on our arctic blockchain journey
            </p>
          </div>

          {/* Social links */}
          <div className="flex relative z-50 gap-6 md:w-1/3 justify-center md:justify-end ">
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:shadow-xl text-gray-700  hover:bg-black transition-colors hover:text-white ">
              <Github className="w-6 h-6  cursor-pointer " />
            </a>
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:shadow-xl text-gray-700 hover:bg-black transition-colors hover:text-white">
              <Twitter className="w-6 h-6  cursor-pointer hover:text-white" />
            </a>
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:shadow-xl text-gray-700 hover:bg-black transition-colors hover:text-white">
              <Linkedin className="w-6 h-6  cursor-pointer hover:text-white" />
            </a>
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:shadow-xl text-gray-700 hover:bg-black transition-colors hover:text-white">
              <Mail className="w-6 h-6  cursor-pointer hover:text-white" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Dapp Studio. All rights reserved.
          </p>
        </div>
      </div>
      {/* Snowfall Animation */}
      {/* <SnowfallEffect /> */}
        </div>
      
    </footer>
  );
};

export default Footer;