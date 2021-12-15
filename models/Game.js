const { model, Schema } = require('mongoose');

const Game = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    players: {
        type: Array
    },
    highScoreWins: {
        type: Boolean
    },
    saveDefaults: {
        type: Boolean
    }

})

module.exports = model("game", Game)