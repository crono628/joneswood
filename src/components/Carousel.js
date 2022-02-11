import React, { Component } from 'react';
import Photo from './Photo';

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const picCount = document.querySelector('.carousel').childElementCount;
    const carousel = document.querySelector('.carousel');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    for (let i = 0; i < picCount; i++) {
      console.log(carousel);
    }
  };

  render() {
    return (
      <div className="container">
        <button className="left btn" onClick={this.handleClick}>
          ◀︎
        </button>
        <div className={this.props.className}>
          <Photo className="active" src={require('../images/IMG_1819.jpeg')} />
          <Photo className="" src={require('../images/IMG_1968.jpeg')} />
          <Photo className="" src={require('../images/IMG_1956.jpeg')} />
          <Photo className="" src={require('../images/IMG_1972.jpeg')} />
          <Photo className="" src={require('../images/IMG_1974.jpeg')} />
          <Photo
            src={require('../images/66621143362__13388F66-FA2B-46D8-B684-4077A7B64C12.jpeg')}
          />
        </div>
        <button className="right btn" onClick={this.handleClick}>
          ▶︎
        </button>
      </div>
    );
  }
}

export default Carousel;
