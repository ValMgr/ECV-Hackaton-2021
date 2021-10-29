const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    fullname: String,
    type: String,
    stock: { type: Number, min: -1 },
    price: { type: Number, min: 0 },
    style: [String],
    mood: [String],
    popularity: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
