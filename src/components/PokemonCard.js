import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const PokemonCard = props => {
    const { pokemon, handleClick, currentPokemon, prepareForBattle } = props;
    const classes = useStyles();

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
                    {currentPokemon ?
                        <Button size="small" color="primary" onClick={() => prepareForBattle()}>
                            Battle
                        </Button>
                        : null}
                </CardActionArea>
            </Card>
        </div>
    );
};

export default PokemonCard;