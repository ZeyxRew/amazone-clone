const express = require ("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.listen(3000);

app.get("/", (req,res)=> {
    res.render("homepage", {title: "Amazon"})
});

/*app.use((req,res)=>{
    res.status(404).render("404", {title: "404"})
});*/




 

