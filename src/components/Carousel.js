import React from 'react';
import About from './About';

const Carousel = () => {
  const appStyle = {
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={appStyle}>
      <div className="text-light row mt-3 mb-5 text-center">
        <div className="ms-auto">Limited.</div>
        <div className="ms-auto">Artisanal.</div>
        <div className="ms-auto">Local.</div>
      </div>
      <div id="main">
        <div id="carousel">
          <div className="mx-auto">
            <div
              id="myCarousel"
              className="carousel slide mx-auto"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require('../images/IMG_1819.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_1956.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_1968.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_2082.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_2378.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_2482.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_2513.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_2514.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_2515.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_2538.jpeg')}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require('../images/IMG_2549.jpeg')}
                    className="d-block w-100"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Carousel;
