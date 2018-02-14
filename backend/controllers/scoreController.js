class ScoreController {

    saveScore(req, res) {
        console.log('in the save method !!')
        res.json({player: "Gaetan", score: 100, message: "awesome victory"})
    }

    viewScore(req, res) {
        console.log('in the view method')
        res.json({player: "Gaetan", score: 100})
    }
}

module.exports = ScoreController;