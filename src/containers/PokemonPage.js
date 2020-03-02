import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonSpecs from "../components/PokemonSpecs"
import MyPokemon from "./MyPokemon"

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    myPokemon: [],
    currentPokemon: null,
    pokemon: "",
    showPokemon: true
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemons")
      .then(res => res.json())
      .then(allPokemon => this.setState({
        allPokemon: allPokemon
      }))
      .catch(err => console.log(err))
  }

  handleClick = (pokemon) => {
    let myPokemonArmy = this.state.myPokemon
    if (!myPokemonArmy.includes(pokemon)){
      this.setState({
        myPokemon:[...this.state.myPokemon, pokemon]
      })
    }
    else {
      let pokemonArray = myPokemonArmy.filter(noPokemon => noPokemon.id !== pokemon.id )
      this.setState({
        myPokemon: [...pokemonArray]
      })
    }
  }

  showPokemonSpecs = (pokemon) => {
    this.state.showPokemon? this.setState({
      pokemon: pokemon,
      showBots: false
    }) : this.setState({
      showPokemon: true
    })
  }

  // showPokemonSpecs(pokemon) {

  // }

  render() {
    return (
      <div>
        <PokemonSpecs showPokemonSpecs = {this.showPokemonSpecs} pokemon = {this.state.pokemon} handleClick = {this.handleClick} /> 
        <MyPokemon myPokemon={this.state.myPokemon} handleClick = {this.handleClick} /> 
        <PokemonCollection allPokemon={this.state.allPokemon} handleClick={this.showPokemonSpecs} />
      </div>
    );
  }
}

export default PokemonPage;