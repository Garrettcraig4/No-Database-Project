const axios = require("axios");
let Pname = [];
let id = 0;
let randomPoke = {};
let userList = [];
let userListTitle = "Your List";
let pokeStats = [];
const getPokemonName = (req, res, next) => {
  randoN = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  axios
    .get(`https://pokeapi.co/api/v1/pokedex/1/`)
    .then(responce => {
      randomPoke = responce.data.pokemon[randoN(0, 777)];
      res.json(randomPoke);
    })
    .catch(console.log());
};
const getUserList = (req, res, next) => {
  //logic add to list
  userList.push(randomPoke);
  res.json(userList);
};
const deletePokemon = (req, res, next) => {
  userList = [];
  res.json(userList);
};

const deleteOnePokemon = (req, res, next) => {
  let num = req.params.id;
  userList.splice(num, 1);
  res.status(200).send(userList);
};

const updateUserTitle = (req, res, next) => {};

// const getPokemonStats = (req, res, next) => {
//   axios.get(`https://pokeapi.co/api/v1`).then(response => {
//     axios
//       .get(`https://pokeapi.co/${response.data.pokemon.resource_uri}`)
//       .then(response => {
//         pokeStats.push(response);
//       });
//   });
// };
//

module.exports = {
  getPokemonName: getPokemonName,
  getUserList: getUserList,
  deletePokemon: deletePokemon,
  deleteOnePokemon: deleteOnePokemon
  // getPokemonStats: getPokemonStats
};
