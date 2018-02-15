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
                assert.equal(result, listScores);
            }
        }
        // on mock le modèle (mongoose model) à passer au controller
        const score = {
            find(callback) {
                callback(null, listScores);
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
            send(result) {
                assert.equal(result, 'Game saved.')
            }
        }
        class Score {
            constructor(obj) {
                obj.save = (callback) => {
                    return callback(null, Promise.resolve())
                }
                return obj;
            }
        }
        const scoreController = new ScoreController(Score);
        scoreController.saveScore(req, res)
    }),
    it('should return a status 500 when datas are wrong', () => {
        const req = {
            body: {
                playerName: false,
                playerScore: true
            }
        }

        const res = {
            send(err) {
                assert.equal(err, 'error')
            },
            status(code) { 
                assert.equal(code, 500);
                return this;
            }
        }
        class Score {
            constructor(obj) {
                obj.save = (callback) => {
                    return callback('error')
                }
                return obj;
            }
        }
        const scoreController = new ScoreController(Score);
        scoreController.saveScore(req, res)
    })
})