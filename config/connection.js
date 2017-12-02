
//Create connection to mySQL
const mysql = require("mysql");
//Set up connection for production environment JawsDB
var env = process.env.NODE_ENV || "development";
var config = require("./config.json")[env];

//Choose either production or development
if(config.use_env_variable) {
  var connection = mysql.createConnection(process.env[config.use_env_variable]);
} else {
  var connection = mysql.createConnection(config);
}

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

module.exports = connection;