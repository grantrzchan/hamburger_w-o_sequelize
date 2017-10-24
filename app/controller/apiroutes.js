//API routing to be used by server.js
const express = require("express");
const connection = require("../config/connection.js")
const app = express();

//API route to get all the burgers
app.get("/api/all",(req,res)=>{
    connection.query("SELECT * FROM burgers;", (err,data)=>{
        if(err) throw err;
        res.render("index",{hamburgers: data});
    });
});

//API route to get just one burger
app.get("/api/:hamburger",(req,res)=>{
    req.params.hamburger = hamburger;
    connection.query("SELECT hamburger FROM burgers",(err,data)=>{
        if(err) throw err;
        res.render("index",{hamburgers: data});
    })
})

//API route to add a hamburger
app.post("/api/",(req,res)=>{
    req.body
})