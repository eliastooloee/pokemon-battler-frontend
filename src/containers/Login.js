import React from 'react'

export default class Login extends React.Component {
    state = {
        username: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.loginUser(this.state.username)
        this.props.history.push("/pokedex")
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label>Login </label>
                    <input type="text" placeholder="Username" name="username" onChange={event => this.handleChange(event)} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}