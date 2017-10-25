//Require mySQL
const connection = require("./connection.js");

var orm = {

    //orm get all burgers
    getAllBurgers: function (tableName) {
        var queryString = "SELECT * FROM ?? ";
        if (err) throw err;
        connection.query(queryString, [tableName], (err, result) => {
        return console.log(result);
        })
    },

    //orm post one burger
    postOneBurger: function (tableName, colName, colVal) {
        var queryString = "INSERT INTO ?? (??,devoured) VALUES (?,FALSE)";
        if (err) throw err;
        connection.query(queryString, [tableName, colName, colVal], (err, result) => {
        return console.log(result);
        })
    },

    //orm update one burger
    putOneBurger: function (tableName, devVal, idVal) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ? ";
        connection.query(queryString, [tableName, devName, idVal], (err, result) => {
            if (err) throw err;
        return console.log(result);
        })
    }

}

module.exports = orm;