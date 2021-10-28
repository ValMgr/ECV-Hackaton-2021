module.exports = (repository) => ({

  getUsers(req, res, next) {
    repository.getAll().then((users) => {
      res.json(users);
    }).catch((err) => {
      next(err);
    });
  },

  getUser(req, res, next) {
    repository.getOne(req.params.id).then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    }).catch((err) => {
      next(err);
    });
  },

  getUserByEmail(req, res, next){
    repository.getOneByEmail(req.params.email).then((user) => {
      if(user){
        res.json(user);
      } else {
        res.sendStatus(404)
      }
    }).catch((err) => {
      next(err);
    });
  },

  createUser(req, res, next) {
    if (req.method != 'POST') {
      res.render('users/add')
    } else {
      repository.create(req.body).then((user) => {
        res.json(user);
      }).catch((err) => {
        next(err);
      });
    }
  },

  updateUser(req, res, next) {
    repository.getOne(req.params.id).then((user) => {
      if (req.method != 'PUT') {
        res.render('users/edit', { user })
      } else {
        repository.update(req.params.id, req.body).then((user) => {
          res.json(user)
        }).catch((err) => {
          next(err);
        });
      }
    }).catch((err => {
      next(err)
    }))
  },

  dropUsers(req, res, next){
    if (req.method != 'DELETE') {
      res.render('globals/drop', {type: 'user'})
    } else {
      repository.drop().then((ok) => {
        res.sendStatus(ok ? 200 : 404);
      }).catch((err) => {
        next(err);
      });
    }
  },

  deleteUser(req, res, next) {
    if (req.method != 'DELETE') {
      res.render('globals/delete', {type: 'user'})
    } else {
      repository.delete(req.params.id).then((ok) => {
        res.sendStatus(ok ? 200 : 404);
      }).catch((err) => {
        next(err);
      });
    }
  }
});
