const assert = require('assert');
const ScoreController = require('../../controllers/scoreController');

describe('get scores', () => {
    it('should return an array', () => {
        const listScores = [{
            "date": "2018-02-14T12:42:35.393Z", "_id": "5a842ec8894b610e90683efb",
            "name": "Gaetan",
            "score": 200, "__v": 0
        },
        {
            "date": "2018-02-14T12:44:35.615Z",
            "_id": "5a842f3c330c220b883ed464",
            "name": "Panda", "score": 750, "__v": 0
        }]

        const req = {}
        const res = {
            // status(code) { return 500 },
            // send(err) { return "Error during getting scores" },
            json(result) {
                assert.equal(result, listScores)
            }
        }
        const score = {
            find(callback) {
                callback(null, 'plop');
            }
        }
        const scoreController = new ScoreController(score);
        scoreController.getScore(req, res)
    })
})

describe('save scores', () => {
    it('should post a score when datas are OK', () => {
        const req = {
            body: {
                playerName: 'Toto',
                playerScore: 50
            }
        }

        const res = {
            json(result) {
                it('plop', () => {
                    console.log('plop')
                })
                assert.equals(result, 15)
            }
        }
        const scoreController = new ScoreController();
        scoreController.saveScore(req, res)
    })
    // ,
    // it('should return an error where datas are wrong', () => {
    //     const req = {
    //         body: {
    //             playerName: false,
    //             playerScore: true
    //         }
    //     }

    //     const res = {
    //         // status(code) { return 500 },
    //         // send(err) { return "Error during getting scores" }
    //         json(result) {
    //             assert.equal(req.body, result)
    //         }
    //     }
    //     scoreController.saveScore(req, res)
    // })
})