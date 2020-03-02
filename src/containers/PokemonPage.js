import React from "react";
import PokemonCollection from "./PokemonCollection";
// import PokemonSpecs from "../components/PokemonSpecs"
import MyPokemon from "./MyPokemon"

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    myPokemon: [],
    currentPokemon: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemons")
      .then(res => res.json())
      .then(allPokemon => this.setState({
        allPokemon: allPokemon
      }))
      .catch(err => console.log(err))
  }

  // showPokemonSpecs(pokemon) {

  // }

  render() {
    return (
      <div>
        <PokemonCollection allPokemon={this.state.allPokemon} />
        {/* <PokemonSpecs /> */}
        {/* <MyPokemon myPokemon={this.state.myPokemon} /> */}
      </div>
    );
  }
}

export default PokemonPage;