// mongoose model
let Score;

class ScoreController {
    constructor(score) {
        Score = score;
    }

    saveScore(req, res) {
        const playerName = req.body.playerName;
        const playerScore = req.body.playerScore;

        var score = new Score({ name: playerName, score: playerScore });
        score.save().then((result) => {
            console.info('Game saved successfuly !', result);
            res.send('Game saved.')
        }).catch((err) => {
            res.status(500).send(err)
        })
    }


    getScore(req, res) {
        Score.find((err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(result);
            }
        })
    }
}

module.exports = ScoreController;