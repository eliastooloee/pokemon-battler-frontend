import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonSpecs from "../components/PokemonSpecs"
import MyPokemon from "./MyPokemon"
import SelectedPokemon from "./SelectedPokemon";
import Battle from "../components/Battle"

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    myPokemon: [],
    currentPokemon: "",
    pokemon: "",
    enemyPokemon: "",
    showPokemon: true,
    showBattle: false,
    winner: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemons")
      .then(res => res.json())
      .then(allPokemon => this.setState({
        allPokemon: allPokemon
      }))
      .catch(err => console.log(err))
  }

  handleClick = (pokemon) => {
    let myPokemonArmy = this.state.myPokemon
    if (!myPokemonArmy.includes(pokemon)) {
      this.setState({
        myPokemon: [...this.state.myPokemon, pokemon]
      })
    }
    else {
      let pokemonArray = myPokemonArmy.filter(noPokemon => noPokemon.id !== pokemon.id)
      this.setState({
        myPokemon: [...pokemonArray]
      })
    }
  }

  showPokemonSpecs = (pokemon) => {
    this.state.showPokemon ? this.setState({
      pokemon: pokemon,
      showBots: false
    }) : this.setState({
      showPokemon: true
    })
  }

  // problem is that Pokemon isn't set to the most recently clicked pokemon but instead the one previously clicked
  selectPokemon = (pokemon) => {
    this.setState({
      pokemon: pokemon
    })
    let myPokemonArmy = this.state.myPokemon
    if (myPokemonArmy.includes(pokemon)) {
      this.setState({
        currentPokemon: pokemon,
        showSelected: true
      })
    } else {
      this.setState({
        showSelected: false
      })
    }
    console.log(pokemon)
    console.log(myPokemonArmy)
  }


  findEnemy = (allPokemon) => {
    let enemy = this.state.allPokemon[Math.floor(Math.random() * this.state.allPokemon.length)];
    this.setState({
      enemyPokemon: enemy
    })

  }

  prepareForBattle = () => {
    this.findEnemy();
    this.setState({
      showBattle: true
    });
  }

  leaveBattle = () => {
    this.setState({
      showBattle: false
    })
  }

  battle = (currentPokemon, enemyPokemon, myPokemon) => {
    console.log('triggered')
    if (this.state.currentPokemon.stat_attack >= this.state.enemyPokemon.stat_attack) {
      this.state.myPokemon.push(this.state.enemyPokemon);
      this.setState({
        winner: this.state.currentPokemon
      })

    } else {
      this.setState({
        winner: this.state.enemyPokemon
      })
      return false;
    }
  }


  render() {
    return (
      <div>
        {this.state.showBattle ? <Battle currentPokemon={this.state.currentPokemon} myPokemon={this.state.myPokemon}
          allPokemon={this.state.allPokemon} enemyPokemon={this.state.enemyPokemon} winner={this.state.winner} battle={this.battle} leaveBattle={this.leaveBattle} /> :
          <div>
            <SelectedPokemon currentPokemon={this.state.currentPokemon} prepareForBattle={this.prepareForBattle} />
            {this.state.pokemon ? <PokemonSpecs showPokemonSpecs={this.showPokemonSpecs} pokemon={this.state.pokemon} handleClick={this.handleClick} /> : null}
            <MyPokemon myPokemon={this.state.myPokemon} selectPokemon={this.selectPokemon} />
            <PokemonCollection allPokemon={this.state.allPokemon} handleClick={this.showPokemonSpecs} />
          </div>}
      </div>
    );
  }
}

export default PokemonPage;