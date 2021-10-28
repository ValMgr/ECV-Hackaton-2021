const mongoose = require('mongoose');
const Quizz = require("./user.model.js");

const usersSchema = mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password: String,
  quizz: [Quizz],
  box: {type: Number, min: 0},
}, {
  timestamps: true
});

module.exports = mongoose.model('User', usersSchema);
