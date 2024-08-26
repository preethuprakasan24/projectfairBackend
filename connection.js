//import mongoose

const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log("mongoDB connected successfully");

}).catch((err) => {
    console.log(`connection failed due to ${err}`);

})