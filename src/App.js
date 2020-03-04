import React, { Component } from 'react';
import './App.css';
import PokemonPage from "./containers/PokemonPage";
import Battle from "./components/Battle"
import Login from "./containers/Login"
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from "react-router-dom"
import MyPokemon from './containers/MyPokemon';
import SignUp from './containers/SignUp'


class App extends Component {
  state = {
    loggedIn: false,
    currentUser: {
      id: "",
      name: ""
    },
    redirect: null
  }

  signUp = (username) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        "name": username
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          loggedIn: true,
          currentUser: {
            id: data.id,
            name: data.name
          },
          redirect: "/pokedex"
        })
      })
      .catch(err => console.log(err))
  }

  loginUser = (username) => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => this.validUser(data, username))
      .catch(err => console.log(err))
  }

  validUser = (data, username) => {
    console.log("valid?", data, username)
    let userExists = data.find(userObj => userObj.name == username.name)
    if (userExists) {
      console.log("valid user")
      this.state.currentUser = userExists
      this.setState({
        redirect: "/pokedex"
      })
    } else {
      alert("User Does Not Exist")
    }
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <Router>
          <Redirect to={this.state.redirect} />
        </Router>
      )
    }
    return (
      <div className="App">
        <Router>
          <NavBar loggedIn={this.state.loggedIn} />
          <Route path="/pokedex" exact component={PokemonPage} />
          <Route path="/battle" exact component={Battle} />
          <Route path="/profile" exact component={MyPokemon} />
          <Route path="/login" exact component={() => <Login loginUser={this.loginUser} />} />
          <Route path="/signup" exact component={() => <SignUp signUp={this.signUp} />} />
        </Router>
      </div>
    );
  }
}
export default App;