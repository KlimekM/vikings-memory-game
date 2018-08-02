import React, { Component } from 'react';

class ResetGameButton extends Component {
  render() {
    const { resetGame } = this.props;

    return (
      <div className="reset-button" onClick={resetGame}>Reset Game</div>
    )
  }
}

export default ResetGameButton;
