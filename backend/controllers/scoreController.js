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
        score.save((err, result) => {
            if (err) {
                res.status(500).send(err)
            } else {
                console.log('Game saved successfuly !');
                res.send('Game saved.')
            }
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