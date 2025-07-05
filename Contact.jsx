// Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3002/login', formData);
      alert(`✅ ${res.data}`);
      setFormData({ email: '', password: '' });
    } catch (err) {
      console.error('❌ Axios Error:', err.response?.data || err.message);
      alert('❌ Failed to send message. Check server connection or input.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Info Section */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-3">
            <AiOutlineHome />
            Let's Talk 👋
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Have feedback or ideas? Fill out the form below and we'll respond within 24 hours.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MdEmail className="text-blue-600" />
            <span>
              Email us: <span className="font-medium text-blue-600">support@superblog.com</span>
            </span>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
            }`}
          >
            <FaPaperPlane />
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
