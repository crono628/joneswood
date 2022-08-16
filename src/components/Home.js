import React from 'react';
import MasonryImageList from './MasonryImageList';

const Home = () => {
  return (
    <div className="home-container">
      <div className="splash-screen">
        <p>Limited.</p>
        <p>Artisanal.</p>
        <p>Local.</p>
      </div>
      <MasonryImageList />
    </div>
  );
};

export default Home;
