import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Trees from './components/Trees';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trees" element={<Trees />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
