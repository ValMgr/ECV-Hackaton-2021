module.exports = (express, controller) => {
  const router = express.Router();

  router.get('/', controller.getUsers);


  return router;
};
