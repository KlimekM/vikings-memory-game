import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import GameBoard from './GameBoard';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <GameBoard />
      </div>
    );
  }
}

export default App;
