import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Login extends React.Component {
    state = {
        username: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.props.loginUser(this.state.username)) {
            this.props.history.push("/pokedex")
        }
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleSignupClick = () => {
        this.props.history.push("/signup")
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <TextField size="small" id="outlined-basic" label="Username" variant="outlined" onChange={event => this.handleChange(event)} />
                    <Button type="submit" variant="contained" color="primary">Login</Button>
                    <Button variant="contained" color="primary" onClick={() => this.handleSignupClick()}>Signup</Button>
                </form>
            </div>
        )
    }
}