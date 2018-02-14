const express = require('express');
const router = express.Router();
const ScoreController = require('../controllers/scoreController');
const scoreController = new ScoreController();

/* GET the scores */
router.get('/', scoreController.getScore);

/* POST the scores */
router.post('/', scoreController.saveScore)

module.exports = router;
