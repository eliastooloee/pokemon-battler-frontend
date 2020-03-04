import React, { useState } from 'react';

const FightCard = props => {
    const { pokemon, victoryStyle } = props;


    function getPokemonNum(num) {
        return ('00' + num).slice(-3)
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div className="ui column">
            <div className="fight-card">
                <div id="winner"> {props.battleResults? 'Winner!': ''} </div>
                <div className="image">
                    <img alt="pokemon sprite" src={pokemon.sprite_front} />
                </div>
                <div className="content">
                    <div className="header">
                        <p>#{getPokemonNum(pokemon.id)}</p>
                        <h3>{capitalizeFirstLetter(pokemon.species)}</h3>
                        <p>Hit Points: {pokemon.stat_hp}</p>
                        <p> Speed: {pokemon.stat_speed}</p>
                        <p>Attack:{pokemon.stat_attack}</p>
                        <p>Special Attack: {pokemon.stat_special_attack}</p>
                        <p>Defense: {pokemon.stat_defense}</p>
                        <p>Special Defense: {pokemon.stat_special_defense}</p>
                    </div>
                    {/* add types and pokeball if collected */}
                </div>
            </div>
        </div>
    );

};

export default FightCard;