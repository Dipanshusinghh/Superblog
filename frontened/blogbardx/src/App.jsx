import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Content from './Components/Content';
import Article from './Components/Article';
import Footer from './Components/Footer';
import Login from './Components/Login';
import About from './Components/About';
import Contact from './Components/Contact'; // ✅ Contact component imported

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ Contact route added */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
