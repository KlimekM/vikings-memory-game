import React, { Component } from 'react';
import ResetGameButton from './ResetGameButton';
import logo from '../logo.svg';

class WinnerModal extends Component {
  render() {
    const { closeWinnerModal, resetGame } = this.props;

    return (
      <div className="modal-background">
        <div className="modal">
          <div className="modal__close" onClick={closeWinnerModal}>X</div>
          <h1 className="modal__header">SKOL VIKES!</h1>
          <img className="modal__image" alt="logo" src={logo} />
          <p className="modal__text">You've matched them all!</p>
          <ResetGameButton resetGame={resetGame} />
        </div>
      </div>
    )
  }
}

export default WinnerModal;
