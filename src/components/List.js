import React, { Component } from "react";
import axios from "axios";
class List extends Component {
  constructor() {
    super();
    this.state = {
      YourList: [],
      title: "",
      displayTitle: ""
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.getuserList = this.getuserList.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
    this.deleteOnePokemon = this.deleteOnePokemon.bind(this);
    this.sendTitle = this.sendTitle.bind(this);
  }
  /*
1. create a delete method
2.create new component with delete button
3.take delete method pass down as props to component
4. put component inside .map method 
5. create endpoint for delete 
*/
  // editTitle(id,title){
  // axios.put(`http;//localhost:3001/api/userListTitle/${id}`)
  // .then(response => {
  //   this.setState({title: response.data});
  // });
  // }

  updateTitle(e) {
    console.log(e);
    this.setState({
      title: e.target.value
    });
  }

  sendTitle() {
    axios
      .put(`http://localhost:3001/api/userListTitle`, {
        title: this.state.title
      })
      .then(response => this.setState({ displayTitle: response.data }));
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
    axios.post("http://localhost:3001/api/userList").then(response => {
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
        <h1 className="usertitle"> {this.state.displayTitle}</h1>
        <input
          type="text"
          value={this.state.title}
          onChange={e => this.updateTitle(e)}
        />
        <button id="savetitle" onClick={this.sendTitle}>
          Save title
        </button>
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
