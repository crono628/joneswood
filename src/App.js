import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Main from './components/Main';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Carousel className="carousel" />
      </div>
    );
  }
}

export default App;
