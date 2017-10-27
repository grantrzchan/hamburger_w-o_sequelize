//Require mySQL
const connection = require("./connection.js");

var orm = {

    //orm get all burgers
    getAllBurgers: function (tableName,callback) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableName], (err, result) => {
        if (err) throw err;
        callback(result);
        })
    },

    //orm post one burger
    postOneBurger: function (tableName, colName, colVal,callback) {
        var queryString = "INSERT INTO ?? (??,devoured) VALUES (?,FALSE)";
        connection.query(queryString, [tableName, colName, colVal], (err, result) => {
        if (err) throw err;
        callback(result);
        })
    },

    //orm update one burger
    putOneBurger: function (tableName, devVal, idVal, callback) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ? ";
        connection.query(queryString, [tableName, devName, idVal], (err, result) => {
        if (err) throw err;
        callback(result);
        })
    }

}

module.exports = orm;