import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';     // Font Awesome
import { MdEmail } from 'react-icons/md';          // Material Design
import { AiOutlineHome } from 'react-icons/ai';    // Ant Design

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-3">
            <AiOutlineHome />
            Let's Talk 👋
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Have feedback, questions, or collaboration ideas? Reach out using the form.
            Our team will get back to you within 24 hours!
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MdEmail className="text-blue-600" />
            <span>
              Email us directly: <span className="font-medium text-blue-600">support@superblog.com</span>
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6 animate-fade-in">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="How can we help you?"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2 hover:shadow-xl transition-transform hover:scale-105"
          >
            <FaPaperPlane className="text-white" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
