import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <img
          className="img-responsive"
          src={this.props.src}
          href={this.props.href}
        />
      </div>
    );
  }
}

export default Photo;
