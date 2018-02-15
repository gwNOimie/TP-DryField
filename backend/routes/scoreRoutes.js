const express = require('express');
const router = express.Router();
const ScoreController = require('../controllers/scoreController');
const Score = require('../models/scoreModel');
const scoreController = new ScoreController(Score);

/* GET the scores */
router.get('/', scoreController.getScore);

/* POST the scores */
router.post('/', scoreController.saveScore)

module.exports = router;
