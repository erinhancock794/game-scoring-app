(function (window) {
  console.log("public script running");

  const gameDatabase = [];

  fetch('/')
  .then((res) => {
    res.json()
    console.log('res-----', res)
  })
  .then((data) => {
      console.log('getdata--->', data)
      return data;
    })

  const newGameForm = document.querySelector("#new-game-form");

  const createNewGameDiv = document.querySelector("#new-game-div");
  console.log("createNewGameDiv------>", createNewGameDiv);
  const newGameNameInput = document.querySelector("#game-name-input");
  console.log("newGameNameInput---->", newGameNameInput);

  const maxScoreInput = document.querySelector("#maxScore");
  const highScoreToggle = document.querySelector("#highScoreWins");
  highScoreToggle.addEventListener("click", () => {
    console.log("toggle clicked");
  });

  const startGameBtn = document.querySelector("#start-game-btn");

  startGameBtn.addEventListener("click", () => {
    console.log("newGameNameInput", newGameNameInput.value);
    const newGameData = {
      name: newGameNameInput.value,
      highScoreWins: true,
      saveDefaults: true,
      id: Date.now(),
      players: []
    };

    submitNewGameInput(newGameData);
  });

  function submitNewGameInput(newGameData) {
    console.log("newGameData----", newGameData);

    fetch('/', {
        method: "POST",
        body: JSON.stringify(newGameData)
      }).then((res) => {
          res.json()
          console.log('res', res)
        })
      .then((data) => {

        console.log('add post data--->', data);
  
      });
    // fetch(".netlify/functions/newGame", {
    //   method: "POST",
    //   body: JSON.stringify(newGameData),
    //   headers: getHeaders(),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("newGame data-->", data));
  }



  function getHeaders() {
    return {
      "Content-Type": "application/json; charset=UTF-8",
    };
  }
})(window);
