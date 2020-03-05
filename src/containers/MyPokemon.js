import React from "react";
import PokemonCard from "../components/PokemonCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const MyPokemon = props => {
  const classes = useStyles();

  function renderPokemons() {
    return props.myPokemon.map(pokemon => {
      return (
        <Grid key={pokemon.id} item xs={2}>
          <PokemonCard pokemon={pokemon} key={pokemon.id} handleClick={props.selectPokemon} />
        </Grid>
      )
    })
  }

  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {renderPokemons()}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

};

export default MyPokemon;