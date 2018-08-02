import React, { Component } from 'react';
import Card from './Card';
import WinnerModal from './WinnerModal';
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
      cardsSelected: [],
    }
  }

  handleCardClick = async (cardId) => {
    const cardsClone = JSON.parse(JSON.stringify(this.state.cards));
    const card = cardsClone.find((card) => card.id === cardId);
    card.isFlipped = true;

    await this.setState({
      cards: cardsClone,
    });

    this.checkCardsSelected();
  }

  checkCardsSelected = async () => {
    const cardsClone = JSON.parse(JSON.stringify(this.state.cards));
    const flippedCards = cardsClone.filter((card) => card.isFlipped === true && card.isMatched === false);

    if (flippedCards.length === 2) {
      if (flippedCards[0].number === flippedCards[1].number) {
        flippedCards.map((card) => {
          card.isMatched = true
          return card;
        });
      } else {
        await this.delayFlip(
          flippedCards.map((card) => {
            card.isFlipped = false;
            return card;
          })
        );
      }
    }

    this.setState({
      cards: cardsClone,
    });
  }

  delayFlip = (fn) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fn), 1000)
    });
  }

  render() {
    const { cards } = this.state;
    const gameCards = cards && cards.map((card) =>
      <Card key={card.id} onClick={this.handleCardClick} {...card} />
    );
    const hasWon = cards.every((card) => card.isMatched === true);

    return (
      <div className="game-board">
        {gameCards}
        {hasWon && <WinnerModal />}
      </div>
    );
  }
}

export default GameBoard;
