import React from 'react'
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'darkgrey',
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const active = {
    color: 'red'
}



export default function NavBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="white">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        PokéBattler
                    </IconButton>
                    <NavLink to="/battle" exact style={link} activeStyle={active}>Battle</NavLink>
                    <NavLink to="/pokedex" exact style={link} activeStyle={active}>Pokédex</NavLink>
                    <NavLink to="/login" exact style={link} activeStyle={active} onClick={props.logout}>{props.loggedIn ? "Logout" : "Login"}</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}