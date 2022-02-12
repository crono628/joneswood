import React, { Component } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div id="main">
          <Main />
        </div>
        <div id="myContact">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
