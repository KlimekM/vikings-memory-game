import React, { Component } from 'react';
import logo from '../logo.svg';

class Card extends Component {
  handleClick = () => {
    const { id, onClick } = this.props;
    onClick(id);
  }

  render() {
    const { id, imgSrc, isFlipped, name, number } = this.props;

    return (
      <div className="card" id={`card-${id}`} onClick={this.handleClick}>
          <div className={isFlipped ? "card-front" : "card-front--hide"}>
            <p className="card-front__text card-front__name">{name}</p>
            <img className="card-front__image" src={imgSrc} />
            <p className="card-front__text">{number}</p>
          </div>
          <div className={isFlipped ? "card-back--hide" : "card-back"}>
            <img className="card-back__image" src={logo} />
          </div>
      </div>
    );
  }
}

export default Card;
