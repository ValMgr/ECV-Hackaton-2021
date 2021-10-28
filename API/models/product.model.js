const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    fullname: String,
    type: String,
    stock: { type: Number, min: 0 },
    price: { type: Number, min: 0 },
    style: [String],
    mood: [String],
    popularity: { type: Number, min: 0, max: 100 }
}, {
    timestamps: true
});

module.exports = mongoose.model('Quizz', productSchema);
