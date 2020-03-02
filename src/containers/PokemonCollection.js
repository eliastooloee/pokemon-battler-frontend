import React from "react";
import PokemonCard from "../components/PokemonCard";

class PokemonCollection extends React.Component {
    renderPokemons = () => {
        return this.props.allPokemon.map(pokemon => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} handleClick = {this.props.handleClick} />
        })
    }

    render() {
        return (
            <div className="ui four column grid">
                <div className="row">
                    {this.renderPokemons()}
                </div>
            </div>
        );
    }

};

export default PokemonCollection;
