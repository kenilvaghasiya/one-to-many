const mongoose = require('mongoose')
const schema = mongoose.Schema


const prosc = schema({
    productname: String,
    productdis: [{ type: schema.Types.ObjectId, ref: 'ProductDis' }],
})


const Product = mongoose.model('Product', prosc);

module.exports = Product