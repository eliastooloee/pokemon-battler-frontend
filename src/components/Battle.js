import React from "react";
import PokemonCard from "../components/PokemonCard";
import FightCard from "../components/FightCard";


class Battle extends React.Component {

    battleResults = (pokemon) => {
    
        return this.props.winner===pokemon 
       
    }

    
    render() {
        return (
          <div className="battle">
          <button type="button" onClick={() =>
                this.props.leaveBattle()}>Leave Battle</button>
            <FightCard  battleResults={this.battleResults(this.props.currentPokemon)} pokemon= {this.props.currentPokemon}/>
            <button type="button" onClick={() =>
                this.props.battle()}>Fight!</button>
            <FightCard battleResults={this.battleResults(this.props.enemyPokemon)} pokemon = {this.props.enemyPokemon} /> 
          </div>
        );
      }
}
export default Battle;