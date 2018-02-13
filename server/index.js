const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3001;
const app = express();
const {
  getPokemonName,
  getUserList,
  deletePokemon,
  deleteOnePokemon,
  updateUserTitle
  // getPokemonStats
} = require("./controller/pokemon_controller");

app.use(bodyParser.json());
app.use(cors());
app.use(express());

app.get("/api/randomPoke", getPokemonName);
app.post("/api/userList", getUserList);
app.put("/api/userListTitle", updateUserTitle);
// add.get("/api/pokeStats", getPokemonStats);
app.delete("/api/userList", deletePokemon);
app.delete("/api/userList/:id", deleteOnePokemon);

//app.post("/api/userListTitle", updateUserTitle);
// change title
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
