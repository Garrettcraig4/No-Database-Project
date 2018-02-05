import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import RandomPokemon from "./components/Randompokemon";
import List from "./components/List";
class App extends Component {
  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v1/pokedex/1/`).then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">POKÉMON NAME GENERATOR </h1>

        <RandomPokemon />
        <List />
      </div>
    );
  }
}

export default App;
