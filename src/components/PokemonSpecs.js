import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 300,
  },
  table: {
    minWidth: 300
  }
});

const PokemonSpecs = props => {
  let { pokemon, handleClick, showPokemonSpecs } = props;
  const classes = useStyles();

  function getPokemonNum(num) {
    return ('00' + num).slice(-3)
  }

  function createData(name, stat) {
    return { name, stat };
  }

  const rows = [
    createData("Hit Points", pokemon.stat_hp),
    createData("Speed", pokemon.stat_speed),
    createData("Attack", pokemon.stat_attack),
    createData("Defense", pokemon.stat_defense),
    createData("Special Attack", pokemon.stat_special_attack),
    createData("Special Defense", pokemon.stat_special_defense)
  ];

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pokemon.sprite_front}
            title="Pokemon Sprite"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {pokemon.species}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              #{getPokemonNum(pokemon.id)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {pokemon.description}
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.stat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => handleClick(pokemon)}>
            Add Pokemon
        </Button>
        </CardActions>
      </Card>
    </div>
  );

};

export default PokemonSpecs;