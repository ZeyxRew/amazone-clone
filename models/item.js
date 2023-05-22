const mongoose = require("mongoose");   
const Schema = mongoose.Schema;

const itemSchema= new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        require: true
    },
    description:{
        type: String,
        required: true
    },
    available:{
        type: Boolean,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    categories:{
        type: String,
        required: true
    },
},{timestamps:true});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;