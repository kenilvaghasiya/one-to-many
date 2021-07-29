const express = require('express')
const { User, Product, ProductDis } = require('../DB/moduleexp')
const router = express.Router()

router.post('/', (req, res) => {

    console.log(req.body)
    const data = new User(req.body)
    data.save().then((data) => { res.send(data) }).catch((err) => { res.json(err); })
})


router.post('/:id', (req, res) => {

    console.log(req.body)
    const data = new Product(req.body)
    data.save().then((data) => {

        User.findOneAndUpdate({ _id: req.params.id }, { $push: { product: data._id } }, { new: true })
            .then(() => { res.send("pro add") })
            .catch((err) => { res.send(err) })
    }).catch((err) => { res.send(err) })
})


router.post('/:id/:idname', (req, res) => {

    console.log(req.body)
    const data = new ProductDis(req.body)
    data.save().then((data) => {
        Product.findOneAndUpdate({ _id: req.params.idname }, { $push: { productdis: data._id } }, { new: true })
            .then(() => { res.send("pro add") })
            .catch((err) => { res.send(err) })
    }).catch((err) => { res.send(err) })
})


router.get('/:id', (req, res) => {

    const data = User.find({ _id: req.params.id })
        .populate('product')
        .then((data) => {
            res.json(data)
        }).catch((err) => { res.send(err) })


})





module.exports = router