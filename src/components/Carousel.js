import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
                src={require('../images/IMG_1972.jpeg')}
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require('../images/IMG_1974.jpeg')}
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
    );
  }
}

export default Carousel;
