import React, { Component } from 'react';
import logo from '../logo.svg';

class Card extends Component {
  render() {
    const { imgSrc, isFlipped, name, number } = this.props;
    return (
      <div className="card">
        {isFlipped && <div className="card-front">
          <p className="card-front__text card-front__name">{name}</p>
          <img className="card-front__image" src={imgSrc} />
          <p className="card-front__text">{number}</p>
        </div>}
        {!isFlipped && <div className="card-back">
          <img className="card-back__image" src={logo} />
        </div>}
      </div>
    );
  }
}

export default Card;
