
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const exphbs = require("express-handlebars");

const port = process.env.PORT || 3000;

var app = express();

//Use bodyparser to only accept strings and arrays for parsing (no nested objects or other data types)
app.use(bodyParser.urlencoded({extended:false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set up routes
require("./app/routes/burger_route.js")(app);

//Serve static content from public, which is located in the app directory 
app.use(express.static("./app/public"));

app.listen(port, ()=>{
    console.log('Server started on http://localhost:' + port);
});


