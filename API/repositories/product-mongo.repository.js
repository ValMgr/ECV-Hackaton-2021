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

    create({ fullname, type, stock, price, style, mood, popularity }) {
        return new Promise((resolve, reject) => {
            Product.create({ fullname, type, stock, price, style, mood, popularity }, (err, product) => {
                err ? reject(err) : resolve(product.toObject());
            });
        });
    }

    update(id, { fullname, type, stock, price, style, mood, popularity  }) {
        return new Promise((resolve, reject) => {
            Product.findByIdAndUpdate(id, { fullname, type, stock, price, style, mood, popularity }, (err, product) => {
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
            });
        });
    }

};