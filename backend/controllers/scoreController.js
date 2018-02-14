const Score = require('../models/scoreModel');

class ScoreController {

    saveScore(req, res) {
        const playerName = req.body.playerName;
        const playerScore = req.body.playerScore;

        var score = new Score({ name: playerName, score: playerScore });
        score.save((err, result) => {
            if(err) return console.error(err);
            return console.log('Game successfuly added ====> '+ result);
        })
    }

    getScore(req, res) {
        Score.find((err, result) => {
            if(err) return console.error(err);
            res.json(result);
        })
    }
}

module.exports = ScoreController;