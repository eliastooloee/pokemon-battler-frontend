import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'darkgrey',
}

const active = {
    color: 'red'
}

class NavBar extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <NavLink to="/battle" exact style={link} activeStyle={active}>Battle</NavLink>
                <NavLink to="/pokedex" exact style={link} activeStyle={active}>Pokédex</NavLink>
                <NavLink to="/login" exact style={link} activeStyle={active} onClick={this.props.logout}>{this.props.loggedIn ? "Logout" : "Login"}</NavLink>
            </div>
        )
    }
}

export default NavBar;