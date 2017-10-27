const express = require("express");
const burgerModel = require("../models/burger_model.js");
var app = express();

module.exports = function (app) {

    //get all burgers
    app.get("/", (req, res) => {
        burgerModel.findAll((data) => {
            var handlebarsData = {
                burgers: data
            };
            res.render("index", handlebarsData);
        })
    }); //end of get all burgers

    //post one burger, then redirect back to display all burgers
    app.post("/", (req, res) => {
        burgerModel.postOne("burger_name", req.body.burger_name);
        res.redirect("/");
    }) //end of post one burger    

    //update one burger to devoured, then redirect back to display all burgers
    app.put("/:id", (req, res) => {
        burgerModel.putOne("TRUE", req.params.id);
        res.redirect("/");
    }) //end of update one burger
}