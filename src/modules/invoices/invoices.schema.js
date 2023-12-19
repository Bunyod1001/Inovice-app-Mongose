const mongoose = require ("mongoose");

const InvoiceSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        min:3
    },
    description:{
        type :String,
        min:10,
        max:1200,
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});


module.exports = mongoose.model("Invoice", InvoiceSchema);