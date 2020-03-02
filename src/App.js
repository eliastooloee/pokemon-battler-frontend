import React, { Component } from 'react';
import './App.css';
import PokemonPage from "./containers/PokemonPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonPage />
      </div>
    );
  }
}
export default App;