import React from 'react';

const About = () => {
  const appStyle = {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
      <div
        style={appStyle}
        id="myAbout"
        className="text-light row text-wrap mx-auto mt-5 mb-5 text-center"
      >
        <p className="wood-blurb d-sm-flex">
          All wood is sourced throughout Litchfield County, Connecticut. Hand
          picked white oak, red oak and cedar has its natural beauty enhanced
          through precision cutting and meticulous attention to detail.
        </p>
      </div>
    </>
  );
};

export default About;
