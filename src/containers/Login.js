import React from 'react'
import { Redirect } from "react-router-dom"

export default class Login extends React.Component {
    state = {
        username: "",
        redirect: null
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.loginUser(this.state.username)
        this.setState({
            redirect: "/pokedex"
        })
        this.props.history.push("/pokedex")
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleSignUp = () => {
        this.setState({
            redirect: "/signup"
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label>Login </label>
                    <input type="text" placeholder="Username" name="username" onChange={event => this.handleChange(event)} />
                    <button type="submit">Login</button>
                    {/* <button onClick={() => this.props.signUp(this.state.username)}>Sign Up</button> */}
                </form>
            </div>
        )
    }
}