const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        min:3
    },
    password:{
        type :String,
        min:10,
        max:1200,
    },
});


module.exports =mongoose.model("User", UserSchema);