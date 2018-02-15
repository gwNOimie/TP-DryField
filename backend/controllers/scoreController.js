const Score = require('../models/scoreModel');

class ScoreController {

    saveScore(req, res) {
        const playerName = req.body.playerName;
        const playerScore = req.body.playerScore;

        var score = new Score({ name: playerName, score: playerScore });
        score.save((err, result) => {
            if(err) res.status(500).send(err);
            console.log('Game saved successfuly ====> '+ result);
            res.send('Game saved.')
        })
    }

    getScore(req, res) {
        Score.find((err, result) => {
            if(err) res.status(500).send(err);
            res.json(result);
        })
    }
}

module.exports = ScoreController;