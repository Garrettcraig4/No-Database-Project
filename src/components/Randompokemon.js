import React, { Component } from "react";
import axios from "axios";
class Randompokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: ""
    };
    this.click = this.click.bind(this);
  }

  click() {
    axios
      .get("http://localhost:3001/api/randomPoke")
      .then(response => {
        console.log(response.data);
        this.setState({ pokemon: JSON.stringify(response.data.name) });
      })
      .catch(console.log());
  }

  // bond on click
  render() {
    return (
      <div className="Randompokemon">
        <h1 id="PokemonName">NAME:{this.state.pokemon} </h1>

        <div className="Randombutton">
          <button id="bttn" onClick={() => this.click()}>
            Catch Random
          </button>
        </div>
      </div>
    );
  }
}

export default Randompokemon;
