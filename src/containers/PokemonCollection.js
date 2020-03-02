import React from "react";
import PokemonCard from "../components/PokemonCard";

class PokemonCollection extends React.Component {
    renderPokemons = () => {
        return this.props.pokemons.map(pokemon => {
            return <PokemonCard pokemon={pokemon} />
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
