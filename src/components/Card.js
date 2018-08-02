import React, { Component } from 'react';
import logo from '../logo.svg';

class Card extends Component {
  handleClick = () => {
    const { id, isFlipped, onClick } = this.props;

    if (!isFlipped) {
      onClick(id);
    }
  }

  render() {
    const { id, imgSrc, isFlipped, isMatched, name, number } = this.props;

    return (
      <div className="card" id={`card-${id}`} onClick={this.handleClick}>
          <div className={isFlipped || isMatched ? "card-front" : "card-front--hide"}>
            <p className="card-front__text card-front__name">{name}</p>
            <img className="card-front__image" alt={name} src={imgSrc} />
            <p className="card-front__text">{number}</p>
          </div>
          <div className={isFlipped ? "card-back--hide" : "card-back"}>
            <img className="card-back__image" alt="logo" src={logo} />
          </div>
      </div>
    );
  }
}

export default Card;
