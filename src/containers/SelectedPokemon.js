import React, { useState } from 'react';


const SelectedPokemon = props => {
    const { currentPokemon, handleClick } = props;


    function getPokemonNum(num) {
        return ('00' + num).slice(-3)
    }

    // function capitalizeFirstLetter(string) {
    //     return (string===null? string : string.charAt(0).toUpperCase() + string.slice(1))
    // }

    // if(props.currentPokemon.length > 0) {
        return (
            <div className="battle-card">
                <div
                    className="battle card"
                    key={currentPokemon.id}
                    // onClick={() => handleClick(currentPokemon)}
                >
                    <div className="image">
                        <img alt="pokemon sprite" src={currentPokemon.sprite_front} /> 
                    </div>
                    <div className="content">
                        <div className="header">
                            <p>#{getPokemonNum(currentPokemon.id)}</p>
                            <h3>{currentPokemon.species}</h3>
                        </div>
                        {/* add types and pokeball if collected */}
                    </div>
                </div>
            </div>
        );
    // } else  return "No pokemons found"
};

export default SelectedPokemon;