import React, { Component } from 'react';
import Header from './Header';
import Game from './Game';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
