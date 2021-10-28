module.exports = (repository) => ({

    getProducts(req, res, next) {
      repository.getAll().then((products) => {
        res.json(products);
      }).catch((err) => {
        next(err);
      });
    },
  
    getProduct(req, res, next) {
      repository.getOne(req.params.id).then((product) => {
        if (product) {
          res.json(product);
        } else {
          res.sendStatus(404);
        }
      }).catch((err) => {
        next(err);
      });
    },
  
    createProduct(req, res, next) {
      if (req.method != 'POST') {
        res.render('products/add')
      } else {
        repository.create(req.body).then((product) => {
          res.json(product);
        }).catch((err) => {
          next(err);
        });
      }
    },
  
    updateProduct(req, res, next) {
      repository.getOne(req.params.id).then((product) => {
        if (req.method != 'PUT') {
          res.render('products/edit', { product })
        } else {
          repository.update(req.params.id, req.body).then((product) => {
            res.json(product)
          }).catch((err) => {
            next(err);
          });
        }
      }).catch((err => {
        next(err)
      }))
    },
  
    dropProducts(req, res, next){
      if (req.method != 'DELETE') {
        res.render('globals/drop', {type: 'product'})
      } else {
        repository.drop().then((ok) => {
          res.sendStatus(ok ? 200 : 404);
        }).catch((err) => {
          next(err);
        });
      }
    },
  
    deleteProduct(req, res, next) {
      if (req.method != 'DELETE') {
        res.render('globals/delete', {type: 'product'})
      } else {
        repository.delete(req.params.id).then((ok) => {
          res.sendStatus(ok ? 200 : 404);
        }).catch((err) => {
          next(err);
        });
      }
    }
  });
  