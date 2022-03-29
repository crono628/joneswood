import React from 'react';
import TopNav from './components/TopNav';
import Carousel from './components/Carousel';
import About from './components/About';
import Trees from './components/Trees';
import { Routes, Route, Redirect } from 'react-router-dom';

import './index.css';

const App = () => {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <div className="container-fluid">
      <TopNav />

      <div className="d-flex flex-column align-items-center">
        <Routes>
          <Route path="/" element={<Carousel />}>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="joneswood" element={<Carousel />} />
          <Route path="trees" element={<Trees />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
