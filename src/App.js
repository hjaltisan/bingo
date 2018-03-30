import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './features/Game'
import Card from './features/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Game />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
