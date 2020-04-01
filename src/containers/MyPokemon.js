import React from "react";
import PokemonCard from "../components/PokemonCard";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 660,
  },
}));

const MyPokemon = props => {
  const classes = useStyles();

  function renderPokemons() {
    return props.myPokemon.map(pokemon => {
      return (
        <GridListTile key={pokemon.id} cols={1}>
          <PokemonCard pokemon={pokemon} key={pokemon.id} handleClick={props.selectPokemon} prepareForBattle={props.prepareForBattle} currentPokemon={props.currentPokemon} />
        </GridListTile>
      )
    })
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={"auto"} className={classes.gridList} cols={3}>
        {renderPokemons()}
      </GridList>

    </div>
  );

};

export default MyPokemon;