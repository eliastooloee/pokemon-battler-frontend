import React from "react";
import PokemonCollection from "../containers/PokemonCollection";
import PokemonSpecs from "../components/PokemonSpecs"
import MyPokemon from "../containers/MyPokemon"

class PokemonPage extends React.Component {
  
    state = {
      
    }
  
  
    render() {
      
      return (
        <div>
          <PokemonCollection />
          <PokemonSpecs />
          <MyPokemon />
        </div>
      );
    }
  
  }
  
  export default PokemonPage;