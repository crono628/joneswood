import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-light row fs-6 mt-5 mb-5 text-center">
        <hr />
        <span className="">
          <p className="fs-4">Contact Info</p>
          <p>Kevin Jones</p>
          <p>860-978-2548</p>
        </span>
      </div>
    );
  }
}

export default Footer;
