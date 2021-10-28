const mongoose = require('mongoose');

const quizzSchema = mongoose.Schema({
 
}, {
  timestamps: true
});

module.exports = mongoose.model('Quizz', quizzSchema);
