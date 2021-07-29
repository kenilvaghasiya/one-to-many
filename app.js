const express = require('express')
const mongoose = require('mongoose')

const app = express()
require('./DB/conn')
app.use(express.json())
app.use(require('./Rout/auth'))


app.listen(3000, () => {
    console.log("server is connected")
})