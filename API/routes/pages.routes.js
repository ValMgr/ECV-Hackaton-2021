module.exports = (express, controller) => {
  const router = express.Router();

  router.get('/', controller.getData);


  return router;
};
