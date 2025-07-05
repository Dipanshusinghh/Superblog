import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap animate-fade-in">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          SuperBlog
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 mt-4 sm:mt-0">
          {["Home", "Articles", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-800 relative group font-medium transition"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <Link
          to="/login"
          className="mt-4 sm:mt-0 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
