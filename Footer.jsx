import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Site Name */}
        <div className="text-lg font-semibold mb-4 md:mb-0">
          SuperBlog
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Articles</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()} SuperBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
