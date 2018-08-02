import React, { Component } from 'react';
import logo from '../logo.svg';

class WinnerModal extends Component {
  render() {
    return (
      <div className="modal-background">
        <div className="modal">
          <div className="modal__close">X</div>
          <h1 className="modal__header">SKOL VIKES!</h1>
          <img className="modal__image" src={logo} />
          <p className="modal__text">You've matched them all!</p>
          <div className="modal__reset-button">Reset Game</div>
        </div>
      </div>
    )
  }
}

export default WinnerModal;
