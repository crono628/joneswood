import React from 'react';
import Carousel from './Carousel';

function Main() {
  return (
    <div>
      <div className="text-light row mt-3 mb-5 text-center">
        <div className="ms-auto">Limited.</div>
        <div className="ms-auto">Artisanal.</div>
        <div className="ms-auto">Local.</div>
      </div>
      <div id="carousel">
        <Carousel />
      </div>
      <div
        id="myAbout"
        className="text-light row text-wrap mx-auto mt-5 mb-5 text-center"
      >
        <p>
          All wood is sourced throughout Litchfield County, Connecticut. Hand
          picked white oak, red oak and cedar has its natural beauty enhanced
          through precision cutting and meticulous attention to detail.
        </p>
      </div>
    </div>
  );
}

export default Main;
