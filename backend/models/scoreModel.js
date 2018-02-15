const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    name: String,
    score: Number,
    date: { type: Date, default: new Date() }
});

var score = mongoose.model('Game', scoreSchema);

module.exports = score;