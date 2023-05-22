const express = require ("express");
const mongoose = require("mongoose");
const ItemRoutes = require("./routes/itemRoutes")

const app = express();

const dbURL = "mongodb+srv://ZeyxRew:Amazon_Clone111@amazoneclone.geuwtxh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURL)
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err))
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.get("/", (req,res)=> {
    res.render("homepage", {title: "Amazon"})
});

app.get("/", (req,res)=> {
    res.render("homepage", {title: "Amazon"})
});

//app.use("/items", itemRoutes);

/*app.use((req,res)=>{
    res.status(404).render("404", {title: "404"})
});*/




 

