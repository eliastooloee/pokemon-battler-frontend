import React from "react";

const PokemonCard = props => {
    const { pokemon, handleClick } = props;

    function getPokemonNum(num) {
        return ('00' + num).slice(-3)
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div className="ui column">
            <div
                className="ui card"
                key={pokemon.id}
                onClick={() => handleClick(pokemon)}
            >
                <div className="image">
                    <img alt="pokemon sprite" src={pokemon.sprite_front} />
                </div>
                <div className="content">
                    <div className="header">
                        <p>#{getPokemonNum(pokemon.id)}</p>
                        <h3>{capitalizeFirstLetter(pokemon.species)}</h3>
                    </div>
                    {/* add types and pokeball if collected */}
                </div>
            </div>
        </div>
    );

};

export default PokemonCard;
