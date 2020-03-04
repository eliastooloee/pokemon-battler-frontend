import React from "react";

const PokemonSpecs = props => {
  let { pokemon, handleClick, showPokemonSpecs } = props;

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={pokemon.sprite_front}
            />
          </div>
          <div className="four wide column">
            <h2>{pokemon.species}</h2>
            <p>
              <strong>HP: </strong>
              {pokemon.stat_hp}
            </p>
            <p>
              <strong>Speed: </strong>
              {pokemon.stat_speed}
            </p>
            <p>
              <strong>Attack: </strong>
              {pokemon.stat_attack}
            </p>
            <p>
              <strong>Special Attack: </strong>
              {pokemon.stat_special_attack}
            </p>
            <p>
              <strong>Defense: </strong>
              {pokemon.stat_defense}
            </p>
            <p>
              <strong>Special Defense: </strong>
              {pokemon.stat_special_defense}
            </p>
            <strong>
              Description: {pokemon.description}
            </strong>
            <br />
            <button
              className="ui button fluid"
              onClick={() =>
                showPokemonSpecs(pokemon)
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                handleClick(pokemon)
              }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default PokemonSpecs;