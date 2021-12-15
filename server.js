const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const port = 5000;
const app = express();

const mongoose = require("mongoose");
const { mongoURI } = require("./config");
const uri = `${mongoURI}`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`you are connected listening on port ${port}`);
//     });
//   })
  .catch(console.error);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static("public"));

const Game = require("./models/Game");

const getAllGames = async () => {
  const allGames = await Game.find();
  return allGames;
};

app.get("/get", async (req, res) => {
    console.log('get request in server')
  await getAllGames().then((result) => {
    res.status(200).json(result);
  });
});

app.post('/add', async (req, res) => {
  console.log("POST ADD HIT----");
  //   const gameData = JSON.parse(req.body)
  //   console.log('gameData--', gameData);
  console.log("req body", req.body);
  let formatGame;
  await Game.findOne({ id: gameData.id }).then(async (duplicate) => {
    if (duplicate) {
      res.status(409).json({
        error: true,
        message: "duplicate",
      });
    } else {
      formatGame = {
        id: gameData.id,
        name: gameData.name,
      };
      res.status(200).json({
        message: "success",
        newGame: formatGame,
      });
      const newGame = await new Game(formatGame);
      newGame
      .save()
      .then((result) => {
          res.json(result);
      })
      .catch((error) => console.log(error));
    }
  });
});
