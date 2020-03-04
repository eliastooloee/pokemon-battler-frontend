import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const PokemonCard = props => {
    // console.log(props)
    const { pokemon, handleClick } = props;
    const classes = useStyles();

    function getPokemonNum(num) {
        return ('00' + num).slice(-3)
    }

    return (
        <div key={pokemon.id} onClick={() => handleClick(pokemon)}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={pokemon.sprite_front}
                        title="Pokemon Card"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {pokemon.species}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default PokemonCard;

{/* <div
    key={pokemon.id}
    onClick={() => handleClick(pokemon)}
>
    <div>
        <img alt="pokemon sprite" src={pokemon.sprite_front} />
    </div>
    <div>
        <div>
            <p>#{getPokemonNum(pokemon.id)}</p>
            <h3>{pokemon.species}</h3>
        </div>
        {/* add types and pokeball if collected */}