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
            <h2>Name: {pokemon.species}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {pokemon.stat_speed}
            </p>
            <strong>
              Class: {pokemon.description} 
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{pokemon.stat_hp}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{pokemon.stat_attack}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{pokemon.stat_defense}</strong>
                  </div>
                </div>
              </div>
            </div>
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