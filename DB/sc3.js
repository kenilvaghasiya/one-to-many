const mongoose = require('mongoose')
const schema = mongoose.Schema


const prodis = schema({
    star: String,
    review: Number,
    price: Number,
})


const ProductDis = mongoose.model('ProductDis', prodis);

module.exports = ProductDis