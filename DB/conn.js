const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/usersdata2", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => {
        console.log("Connection Done")
    })
    .catch((err) => { console.log(err + "TRy one more time") })