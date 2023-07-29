const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
    mongoose.connect(
        process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreatedIndex: true,
        }
    )
    .then(() => {
        console.log("Connected");
    })
    .catch((e) => {
        console.log("Connection failed");
        console.error(e);
    });
}

module.exports = dbConnect;