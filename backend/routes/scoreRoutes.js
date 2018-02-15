const express = require('express');
const router = express.Router();
const ScoreController = require('../controllers/scoreController');
const Score = require('../models/scoreModel');
const scoreController = new ScoreController(Score);

/* GET the scores */
router.get('/', scoreController.getScore.bind(scoreController));

/* POST the scores */
router.post('/', scoreController.saveScore.bind(scoreController))

module.exports = router;
