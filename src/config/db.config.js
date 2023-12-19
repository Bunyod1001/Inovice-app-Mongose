const mongoose = require ("mongoose")


async function connect () {
    await mongoose.connect("mongodb://127.0.0.1:27017/test_213456");
    console.log("database connection established");
}

module.exports = connect;