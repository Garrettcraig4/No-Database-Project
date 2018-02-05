import React, { Component } from "react";
import axios from "axios";
class List extends Component {
  constructor() {
    super();
    this.state = {
      YourList: [],
      title: ""
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.getuserList = this.getuserList.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
    this.deleteOnePokemon = this.deleteOnePokemon.bind(this);
  }
  /*
1. create a delete method
2.create new component with delete button
3.take delete method pass down as props to component
4. put component inside .map method 
5. create endpoint for delete 
*/
  updateTitle(e) {
    console.log(e);
    this.setState({
      title: e.target.value
    });
    // axios
    // .post(`http://localhost:3001/api/userListTitle`)
    // .then(response => {

    // })
  }

  deleteOnePokemon(pokeIndex) {
    axios
      .delete(`http://localhost:3001/api/userList/${pokeIndex}`)
      .then(response => {
        this.setState({ YourList: response.data });
      });
  }

  deletePokemon() {
    axios.delete("http://localhost:3001/api/userList").then(response => {
      this.setState({ YourList: response.data });
    });
  }

  getuserList() {
    axios.get("http://localhost:3001/api/userList").then(response => {
      console.log(response);
      this.setState({ YourList: response.data });
    });
  }

  render() {
    let pokemonList = this.state.YourList.map((pokemon, i) => {
      return (
        <div key={i} className="userlistcards">
          <p>{pokemon.name}</p>
          <button id="deleteButton2" onClick={() => this.deleteOnePokemon(i)}>
            delete pokémon
          </button>
        </div>
      );
    });
    return (
      <div className="List">
        <h1 className="usertitle"> {this.state.title}</h1>
        <input
          type="text"
          value={this.state.title}
          onChange={this.updateTitle}
        />

        <button id="addToList" onClick={() => this.getuserList()}>
          Add to your list
        </button>
        <div className="displayList">{pokemonList}</div>

        <div className="deleteList">
          <button id="deleteButton" onClick={() => this.deletePokemon()}>
            Remove all list
          </button>
        </div>
      </div>
    );
  }
}

export default List;
