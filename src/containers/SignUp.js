import React from 'react'
import PokemonCard from '../components/PokemonCard'

export default class SignUp extends React.Component {
    state = {
        username: "",
        myPokemon: null
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.signUp(this.state.username)
        this.props.history.push("/pokedex")
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div className="SignUp">
                <form onSubmit={this.handleSubmit}>
                    <label>Sign Up </label>
                    <input type="text" placeholder="Username" name="username" onChange={event => this.handleChange(event)} />
                    {/* <PokemonCard pokemon={} />
                    <PokemonCard pokemon={} />
                    <PokemonCard pokemon={} /> */}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}