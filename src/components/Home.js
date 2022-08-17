import React from 'react';
import Carousel from './Carousel';

const Home = () => {
  return (
    <div className="home-container">
      <div className="splash-screen">
        <p>Limited.</p>
        <p>Artisanal.</p>
        <p>Local.</p>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
