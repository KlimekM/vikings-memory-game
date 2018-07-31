import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { imgSrc, name, number } = this.props;

    return (
      <div className="card" >
        <p>{name}</p>
        <img src={imgSrc} />
        <p>{number}</p>
      </div>
    );
  }
}

export default Card;
