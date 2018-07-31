import React, { Component } from 'react';
import Card from './Card';
import { cards } from '../utilities/cards';

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [...cards, ...cards],
    }
  }

  render() {
    const { cards } = this.state;
    const gameCards = cards && cards.map((card) =>
      <Card {...card} />
    );

    return (
      <div className="game-board">
        {gameCards}
      </div>
    );
  }
}

export default GameBoard;
