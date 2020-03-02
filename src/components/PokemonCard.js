import React from "react";

const PokemonCard = props => {
    const { pokemon } = props;

    function getPokemonNum(num) {
        return ('00' + num).slice(-2)
    }

    return (
        <div className="ui column">
            <div
                className="ui card"
                key={pokemon.id}
            >
                <div className="image">
                    <img alt="pokemon sprite" src={pokemon.sprite_front} />
                </div>
                <div className="content">
                    <div className="header">
                        <p>#{getPokemonNum(pokemon.id)}</p>
                        <h3>{pokemon.species}</h3>
                    </div>
                    {/* add types and pokeball if collected */}
                </div>
            </div>
        </div>
    );

};

export default PokemonCard;
