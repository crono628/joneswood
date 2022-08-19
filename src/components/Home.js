import { Typography } from '@mui/material';
import React from 'react';
import Carousel from './Carousel';
// import MasonryImages from './MasonryImages';

const Home = () => {
  return (
    <div className="home-container">
      <div className="splash-screen">
        <p>Limited.</p>
        <p>Artisanal.</p>
        <p>Local.</p>
      </div>
      <Carousel />
      {/* <MasonryImages /> */}

      <div className="blurb">
        <Typography maxWidth={'400px'} align={'center'}>
          All wood is sourced throughout Litchfield County, Connecticut. Hand
          selected white oak, red oak and cedar will get its natural beauty
          enhanced through precision cutting and meticulous attention to detail.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
