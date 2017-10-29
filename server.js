
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const exphbs = require("express-handlebars");
const path = require("path");

const port = process.env.PORT || 3000;

var app = express();

//Use bodyparser to only accept strings and arrays for parsing (no nested objects or other data types)
app.use(bodyParser.urlencoded({extended:false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
console.log(path.join(__dirname, 'app/views'));

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set up routes
require("./app/controller/burger_routes.js")(app);

//Serve static content from public, which is located in the app directory 
app.use(express.static(path.join(__dirname, 'app/public')));
app.listen(port, ()=>{
    console.log('Server started on http://localhost:' + port);
});


