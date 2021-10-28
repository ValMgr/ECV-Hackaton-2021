module.exports = (express, controller) => {
    const router = express.Router();
  
    router.get('/', controller.getProducts);
  
    router.get('/add', controller.createProduct);
  
    router.post('/add', controller.createProduct);
  
    router.get('/drop', controller.dropProducts);
  
    router.delete('/drop', controller.dropProducts);
  
    router.get('/edit/:id', controller.updateProduct);
  
    router.put('/edit/:id', controller.updateProduct);
  
    router.get('/delete/:id', controller.deleteProduct);
  
    router.delete('/delete/:id', controller.deleteProduct);
  
    router.get('/:id', controller.getProduct);
  
    return router;
  };
  