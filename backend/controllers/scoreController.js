// mongoose model
let Score;

class ScoreController {
    constructor(score) {
        Score = score;
    }

    saveScore(req, res) {
        const playerName = req.body.name;
        const playerScore = req.body.score;

        var score = new Score({ name: playerName, score: playerScore });
        score.save().then((result) => {
            console.info('Game saved successfuly !', result);
            res.send('Game saved.')
        }).catch((err) => {
            res.status(500).send(err)
        })
    }


    getScore(req, res) {
        Score.find().then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).send(err)
        })
    }
}

module.exports = ScoreController;