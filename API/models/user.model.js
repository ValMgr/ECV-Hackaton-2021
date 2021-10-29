const mongoose = require('mongoose');
const Quizz = require("./user.model.js");

const usersSchema = mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password: String,
  subscribtion: {type: Number, min: "0", max: "2"},
  quizz: {
    style: [String],
    book: Boolean,
    variety: Boolean,
    popularity: Boolean,
    cd: Boolean,
    vinyle: Boolean,
    events: Boolean,
    concert: Boolean,
    instrument: Boolean,
    playlist: Boolean,
    age: Number
  },
  box: {type: Number, min: 0, default: 0},
}, {
  timestamps: true
});


module.exports = mongoose.model('User', usersSchema);
