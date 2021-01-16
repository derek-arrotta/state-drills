import React, { Component } from 'react';
import HelloWorld2 from './state-drills/HelloWorld2';
import Bomb2 from './state-drills/Bomb2';
import RouletteGun from './state-drills/RouletteGun';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <HelloWorld2 />
        <h2>Bomb</h2>
        <Bomb2 />
        <h2>Roulette Gun</h2>
        <RouletteGun bulletInChamber={6} />
      </div>
    );
  }
}

export default App;
