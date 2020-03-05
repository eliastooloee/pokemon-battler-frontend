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

const SelectedPokemon = props => {
    const { currentPokemon, prepareForBattle } = props;
    const classes = useStyles();

    return (
        <div key={currentPokemon.id}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={currentPokemon.sprite_front}
                        title="Pokemon Card"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {currentPokemon.species}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => prepareForBattle()}>
                        Battle
                    </Button>
                </CardActions>
            </Card>
        </div>
        // <div className="battle-card">
        //     <div
        //         className="battle card"
        //         key={currentPokemon.id}
        //     >
        //         <div className="image">
        //             <img alt="pokemon sprite" src={currentPokemon.sprite_front} />
        //         </div>
        //         <div className="content">
        //             <div className="header">
        //                 <p>#{getPokemonNum(currentPokemon.id)}</p>
        //                 <h3>{currentPokemon.species}</h3>
        //             </div>
        //         </div>
        //     </div>
        //     <button type="button" onClick={() =>
        //         prepareForBattle()
        //     }> Battle! </button>/>
        //     </div>
    );
};

export default SelectedPokemon;