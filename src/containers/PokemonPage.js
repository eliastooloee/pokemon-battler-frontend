import React from "react";
import PokemonCollection from "../containers/PokemonCollection";
import PokemonSpecs from "../components/PokemonSpecs"
import MyPokemon from "../containers/MyPokemon"

class PokemonPage extends React.Component {
  
    state = {
      allPokemon: [],
      myPokemon: [],
      currentPokemon: null
    }


     
 componentDidMount() {
  fetch("localhost:3000/pokemons")
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
          <PokemonCollection allPokemon = {allPokemon}/>
          <PokemonSpecs />
          <MyPokemon myPokemon = {myPokemon} />
        </div>
      );
    }
  
  }
  
  export default PokemonPage;