import React from "react";
import PokemonCard from "../components/PokemonCard";

class MyPokemon extends React.Component {

  render(){
    return (
      <div className="bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              this.props.myPokemon.map( pokemon => <PokemonCard handleClick = {this.props.selectPokemon} key={pokemon.id} pokemon={pokemon} />)
            }
            My Pokemon
          </div>
        </div>
      </div>
    );
  }
  
};

export default MyPokemon;