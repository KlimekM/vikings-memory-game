import React, { Component } from 'react';
import Card from './Card';
import { cards } from '../utilities/cards';

class GameBoard extends Component {
  constructor(props) {
    super(props)

    /* creating a deep clone of the original 12 card array so that I can increment the id to pass it as a unique identifier key for the card component */
    const cardsClone = JSON.parse(JSON.stringify(cards)).map((card) => {
      card.id += 12;
      return card;
    });

    this.state = {
      cards: [...cards, ...cardsClone],
    }
  }

  handleCardClick = (cardId) => {
    const cardsClone = JSON.parse(JSON.stringify(this.state.cards));
    const card = cardsClone.find((card) => card.id === cardId);
    card.isFlipped = true;

    this.setState({
      cards: cardsClone
    });
  }

  render() {
    const { cards } = this.state;
    const gameCards = cards && cards.map((card) =>
      <Card key={card.id} onClick={this.handleCardClick} {...card} />
    );

    return (
      <div className="game-board">
        {gameCards}
      </div>
    );
  }
}

export default GameBoard;
