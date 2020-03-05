import React, { Component } from 'react';
import './App.css';
import PokemonPage from "./containers/PokemonPage";
import Battle from "./components/Battle"
import Login from "./containers/Login"
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPokemon from './containers/MyPokemon';
import SignUp from './containers/SignUp'


class App extends Component {
  state = {
    loggedIn: false,
    currentUser: {
      id: "",
      name: ""
    }
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
          }
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
    let userExists = data.find(userObj => userObj.name === username)
    if (userExists) {
      console.log("valid user")
      this.setState({
        currentUser: {
          id: userExists.id,
          name: userExists.name
        },
        loggedIn: true
      })
    } else {
      alert("User Does Not Exist")
    }
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      currentUser: {
        id: "",
        name: ""
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar loggedIn={this.state.loggedIn} logout={this.logout} />
          <Route path="/pokedex" exact render={() => <PokemonPage currentUser={this.state.currentUser} />} />
          <Route path="/battle" exact component={Battle} />
          <Route path="/profile" exact component={MyPokemon} />
          <Route path="/login" exact render={(props) => <Login {...props} loginUser={this.loginUser} />} />
          <Route path="/signup" exact render={(props) => <SignUp {...props} signUp={this.signUp} />} />
        </Router>
      </div>
    );
  }
}
export default App;