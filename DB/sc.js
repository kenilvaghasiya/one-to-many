const mongoose = require('mongoose')
const schema = mongoose.Schema


const usersch = schema({
    name: String,
    mobile: Number,
    product: [{ type: schema.Types.ObjectId, ref: 'Product' }],
})
const User = mongoose.model('User', usersch);

module.exports = User