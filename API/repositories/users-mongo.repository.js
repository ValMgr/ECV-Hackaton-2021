const User = require('../models/user.model');

module.exports = class {

  getAll() {
    return new Promise((resolve, reject) => {
      User.find({}, (err, users) => {
        err ? reject(err) : resolve(users.map((user) => user.toObject()));
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      User.findById(id, (err, user) => {
        err ? reject(err) : resolve(user.toObject());
      });
    });
  }

  create({ username, fullname, email, password, quizz, box }) {
    return new Promise((resolve, reject) => {
      User.create({ username, fullname, email, password, quizz, box }, (err, user) => {
        err ? reject(err) : resolve(user.toObject());
      });
    });
  }

  update(id, { username, fullname, email, password, quizz, box }) {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(id, { username, fullname, email, password, quizz, box }, (err, user) => {
        err ? reject(err) : resolve(user.toObject());
      });
    });
  }

  drop() {
    return new Promise((resolve, reject) => {
      User.collection.drop({}, (err, success) => {
        err ? reject(err) : resolve(success);
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      User.findByIdAndDelete(id, (err, user) => {
        err ? reject(err) : resolve(!!user);
      })
    });
  }
};
