module.exports = (express, controller) => {
  const router = express.Router();

  router.get('/', controller.getUsers);

  router.get('/add', controller.createUser);

  router.post('/add', controller.createUser);

  router.get('/drop', controller.dropUsers);

  router.delete('/drop', controller.dropUsers);

  router.get('/edit/:id', controller.updateUser);

  router.put('/edit/:id', controller.updateUser);

  router.get('/delete/:id', controller.deleteUser);

  router.delete('/delete/:id', controller.deleteUser);

  router.get('/id/:id', controller.getUser);

  router.get('/:email', controller.getUserByEmail)

  return router;
};
