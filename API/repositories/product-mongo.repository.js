const Product = require('../models/product.model');

module.exports = class {

    getAll() {
        return new Promise((resolve, reject) => {
            Product.find({}, (err, products) => {
                err ? reject(err) : resolve(products.map(product => product.toObject()));
            });
        });
    }

    


    getOne(id) {
        return new Promise((resolve, reject) => {
        Product.findById(id, (err, product) => {
            err ? reject(err) : resolve(product.toObject());
        });
        });
    }

    create({ }) {
        return new Promise((resolve, reject) => {
        Product.create({  }, (err, product) => {
            err ? reject(err) : resolve(user.toObject());
        });
        });
    }

    update(id, {  }) {
        return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, {  }, (err, product) => {
            err ? reject(err) : resolve(product.toObject());
        });
        });
    }

    drop() {
        return new Promise((resolve, reject) => {
        Product.collection.drop({}, (err, success) => {
            err ? reject(err) : resolve(success);
        });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
        Product.findByIdAndDelete(id, (err, product) => {
            err ? reject(err) : resolve(!!product);
        })
        });
    }

};