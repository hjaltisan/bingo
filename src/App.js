import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './features/Game'
import Card from './features/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
