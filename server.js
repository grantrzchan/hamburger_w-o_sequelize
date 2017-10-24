
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const port = process.env.PORT || 3000;

var app = express();

//Use bodyparser to only accept strings and arrays for parsing (no nested objects or other data types)
app.use(bodyParser.urlencoded({extended:false}));

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Serve static content from public, which is located in the app directory 
app.use(express.static("./app/public"));

app.listen(PORT, ()=>{
    console.log('Server started on http://localhost:' + PORT);
});


