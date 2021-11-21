(function(window) {


    console.log('public script running');
    const newGameForm = document.querySelector("#new-game-form");

    const createNewGameDiv = document.querySelector('#new-game-div');
    console.log('createNewGameDiv------>', createNewGameDiv);
    const newGameNameInput = document.querySelector('#game-name-input');
    console.log('newGameNameInput---->', newGameNameInput);

    const maxScoreInput = document.querySelector("#maxScore");
    const highScoreToggle = document.querySelector("#highScoreWins");;



    const startGameBtn = document.querySelector("#start-game-btn");

    startGameBtn.addEventListener('click', () => {
        submitNewGameInput(newGameForm);
    })

    function submitNewGameInput(newGameForm) {
        console.log('newGameForm----', newGameForm)

    }

    fetch('.netlify/functions/helloWorld')
        .then(res => res.json())
        .then(data => console.log('data-->', data));


    fetch('.netlify/functions/newGame', {
            method: "PUT",
            body: JSON.stringify({ body: 'newGame endpoint data' }),
            headers: getHeaders()
        })
        .then(res => res.json())
        .then(data => console.log('newGame data-->', data));


    function getHeaders() {
        return {
            "Content-Type": "application/json; charset=UTF-8",
        };
    }
})(window);