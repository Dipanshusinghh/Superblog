import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About SuperBlog</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to <span className="font-semibold">SuperBlog</span> — your go-to platform for insightful articles,
        tutorials, and opinions from tech enthusiasts and developers across the world.
        Our mission is to create a community of writers and readers who love to share and learn.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Whether you're a beginner trying to understand the basics of web development or an experienced developer
        diving into complex system design, SuperBlog has something for you.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        This platform is built using modern web technologies like <strong>React.js</strong>, <strong>Node.js</strong>,
        and <strong>MongoDB</strong>, and is styled with <strong>Tailwind CSS</strong> for a clean, responsive UI.
        We're always working to improve, so stay tuned and keep reading!
      </p>
    </div>
  );
};

export default About;
