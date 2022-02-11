import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navigation sticky" id="navbar">
        <h1 className="joneswood">Joneswood</h1>
        <a href="">Featured</a>
        <a href="">Contact</a>
        <a href="">About</a>
      </nav>
    );
  }
}

export default Navbar;
