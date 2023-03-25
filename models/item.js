const mongoose = require("mongoos");
const Schema = mongoose.Schema;

const itemSchema= new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: double,
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
        type: double,
        required: true
    }
},{timestamps:true});

const Item = mongoose.model("Item",itemSchema);
module.exports = Item;