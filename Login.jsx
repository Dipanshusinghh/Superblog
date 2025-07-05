import React, { useState } from 'react';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);

    try {
      const res = await axios.post('http://localhost:3002/login', formData); // OR use: `${import.meta.env.VITE_API_URL}/login`
      alert(`✅ ${res.data}`);
    } catch (error) {
      if (error.response) {
        console.error('❌ Server responded with error:', error.response.data);
      } else if (error.request) {
        console.error('❌ No response from server. Request details:', error.request);
      } else {
        console.error('❌ Error setting up request:', error.message);
      }
      alert("❌ Failed to login. Check server connection or data.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-md w-full transition-transform hover:scale-[1.01] duration-300">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6 tracking-wide">Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-700">
          Don't have an account? <a href="/register" className="text-indigo-600 font-medium hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
