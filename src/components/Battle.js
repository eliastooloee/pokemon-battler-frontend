import React from "react";
import FightCard from "../components/FightCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

const Battle = props => {
  const classes = useStyles();

  function battleResults(pokemon) {
    return props.winner === pokemon
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          <Grid key={props.currentPokemon.id} item xs={4}>
            <FightCard battleResults={battleResults(props.currentPokemon)} pokemon={props.currentPokemon} />
          </Grid>
          <Button size="small" color="primary" onClick={() => props.battle()}>
            Battle
          </Button>
          <Grid key={props.enemyPokemon.id} item xs={4}>
            <FightCard battleResults={battleResults(props.enemyPokemon)} pokemon={props.enemyPokemon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Battle;