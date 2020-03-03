import React, { Component } from 'react';
import './App.css';
import PokemonPage from "./containers/PokemonPage";
import Battle from "./components/Battle"
import Login from "./containers/Login"
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route path="/pokedex" exact component={PokemonPage} />
          <Route path="/battle" exact component={Battle} />
          <Route path="/login" exact component={Login} />
          <PokemonPage />
        </Router>
      </div>
    );
  }
}
export default App;