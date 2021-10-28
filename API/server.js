const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const pagesController = require('./controllers/pages.controller');
const pagesRoutes = require('./routes/pages.routes');

const m_usersRepository = require('./repositories/users-mongo.repository');
const usersController = require('./controllers/users.controller');
const usersRoutes = require('./routes/users.routes');

const m_productRepository = require('./repositories/product-mongo.repository');
const productController = require('./controllers/products.controller');
const productRoutes = require('./routes/product.routes');


const usersRepository = new m_usersRepository;
const productRepository = new m_productRepository;

const viewExt = '.hbs';
const app = express();
const port = 8888;

// Handlebars helpers
const hbs = require('handlebars');
const productsController = require('./controllers/products.controller');

hbs.registerHelper('check', function (value, comparator) {
    return (value === comparator) ? 'No content' : value;
});

hbs.registerHelper('haveQuizz', function (value) {
    return (value === null) ? 'No' : 'Yes';
});




app.engine(viewExt, exphbs({ extname: viewExt }));
app.set('view engine', viewExt);

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/products', productRoutes(express, productController(productRepository)))
app.use('/users', usersRoutes(express, usersController(usersRepository)));
app.use('/', pagesRoutes(express, pagesController(usersRepository, productRepository)));

app.use((req, res) => {
    console.log('FALLBACK', req.method, req.url);
    res.status(404).render('error', { layout: false, status: '404 | Not Found' });
});

mongoose.connect('mongodb://localhost:27017', {
    user: 'admin',
    pass: 'secret',
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection failure', err);
});

app.listen(port, () => {
    console.log(`Adresse du serveur: http://localhost:${port}`);
});
