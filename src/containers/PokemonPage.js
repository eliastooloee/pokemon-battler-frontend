import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonSpecs from "../components/PokemonSpecs"
import MyPokemon from "./MyPokemon"
import SelectedPokemon from "./SelectedPokemon";

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    myPokemon: [],
    currentPokemon: "",
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

// problem is that Pokemon isn't set to the most recently clicked pokemon but instead the one previously clicked
  selectPokemon = (pokemon) => {
    this.setState({
      pokemon: pokemon
    })
    let myPokemonArmy = this.state.myPokemon
    if(myPokemonArmy.includes(pokemon)) {
      this.setState({
      currentPokemon: pokemon,
      showSelected: true
    })} else {
      this.setState({
        showSelected: false
      })
    }
    console.log(pokemon)
    // console.log(currentPokemon)
    console.log(myPokemonArmy)
  }



  // showPokemonSpecs(pokemon) {

  // }

  render() {
    // console.log(this.state.allPokemon[0])
    // this.setState({currentPokemon: this.state.allPokemon[0]});
    return (
      <div>
        <SelectedPokemon currentPokemon = {this.state.currentPokemon}/>
        <PokemonSpecs showPokemonSpecs = {this.showPokemonSpecs} pokemon = {this.state.pokemon} handleClick = {this.handleClick} /> 
        <MyPokemon myPokemon={this.state.myPokemon} selectPokemon = {this.selectPokemon} /> 
        <PokemonCollection allPokemon={this.state.allPokemon} handleClick={this.showPokemonSpecs} />
      </div>
    );
  }
}

export default PokemonPage;