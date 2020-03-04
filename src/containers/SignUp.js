import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                    <TextField size="small" id="outlined-basic" label="Username" variant="outlined" onChange={event => this.handleChange(event)} />
                    <Button type="submit" variant="contained" color="primary">Signup</Button>
                </form>
            </div>
        )
    }
}