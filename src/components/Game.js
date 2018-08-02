import React, { Component, Fragment } from 'react';
import Card from './Card';
import WinnerModal from './WinnerModal';
import ResetGameButton from './ResetGameButton';
import { vikingsCards, createCardDeck } from '../utilities/cards';

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: createCardDeck(vikingsCards),
      cardsSelected: [],
      hasClosedModal: false,
    }
  }

  handleCardClick = async (cardId) => {
    /* using a cardsClone so that we don't directly mutate the cards in this.state */
    const cardsClone = JSON.parse(JSON.stringify(this.state.cards));
    const card = cardsClone.find((card) => card.id === cardId);
    card.isFlipped = true;

    await this.setState({
      cards: cardsClone,
    });

    this.checkCardsSelected();
  }

  checkCardsSelected = async () => {
    /* using a cardsClone so that we don't directly mutate the cards in this.state */
    const cardsClone = JSON.parse(JSON.stringify(this.state.cards));
    const flippedCards = cardsClone.filter((card) => card.isFlipped === true && card.isMatched === false);

    if (flippedCards.length === 2) {
      /* disable pointer events while the cards are checked for a match */
      this.toggleGameBoardPointerEvents();
      if (flippedCards[0].number === flippedCards[1].number) {
        /* if the cards are a match, toggle the success animation and mark isMatched on each card to true */
        await this.delay(this.toggleAnimationClass(flippedCards[0], flippedCards[1], 'card-front--successful-match'));
        flippedCards.map((card) => {
          card.isMatched = true
          return card;
        });
        /* remove the successful match class in case the game is reset */
        this.toggleAnimationClass(flippedCards[0], flippedCards[1], 'card-front--successful-match');
      } else {
        /* if the cards are not a match, toggle the unsuccessful animation and flip the cards back to their original state */
        this.toggleAnimationClass(flippedCards[0], flippedCards[1], 'card-front--shake');
        await this.delay(
          flippedCards.map((card) => {
            card.isFlipped = false;
            return card;
          })
        );
        /* remove the unsuccessful match class so that it is applied upon subsequent match attempts */
        this.toggleAnimationClass(flippedCards[0], flippedCards[1], 'card-front--shake');
      }
      /* re-enable pointer events upon checking cards for a match */
      this.toggleGameBoardPointerEvents();
    }

    this.setState({
      cards: cardsClone,
    });
  }

  toggleAnimationClass = (card1, card2, animationClass) => {
    const firstCard = document.getElementById(`card-${card1.id}`);
    const secondCard = document.getElementById(`card-${card2.id}`);

    firstCard.classList.toggle(animationClass);
    secondCard.classList.toggle(animationClass);
  }

  toggleGameBoardPointerEvents = () => {
    const gameBoard = document.querySelector('.game-board');
    gameBoard.classList.toggle('game-board--disabled');
  }

  delay = (fn) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fn), 1000)
    });
  }

  closeWinnerModal = () => {
    this.setState({
      hasClosedModal: true,
    });
  }

  resetGame = () => {
    this.setState({
      cards: createCardDeck(vikingsCards),
      cardsSelected: [],
      hasClosedModal: false,
    });
  }

  render() {
    const { cards, hasClosedModal } = this.state;
    const gameCards = cards && cards.map((card) =>
      <Card key={card.id} onClick={this.handleCardClick} {...card} />
    );
    const hasWon = cards.every((card) => card.isMatched === true);

    return (
      <Fragment>
        <ResetGameButton resetGame={this.resetGame} />
        <div className="game-board">
          {gameCards}
        </div>
        {hasWon && !hasClosedModal && <WinnerModal closeWinnerModal={this.closeWinnerModal} resetGame={this.resetGame} />}
      </Fragment>
    );
  }
}

export default Game;
