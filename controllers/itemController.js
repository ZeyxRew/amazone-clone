const Item = require("../models/item");

//const categories = [book,Dvd,Cd,game, movie,toy];

const item_index = (req,res) => {
    Item.find().sort()
}

module.exports = {
    item_index,
}