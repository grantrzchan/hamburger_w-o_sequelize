//Require mySQL
const connection = require("./connection.js");

var orm = {

    //orm get all burgers
    getAllBurgers: function (tableName, callback) {
        let queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableName],
            function (err, result) {
                if (err) throw err;
                callback(result);
            })
    },

    //orm post one burger
    postOneBurger: function (tableName, colName, colVal, callback) {
        let queryString = "INSERT INTO ?? (??,devoured) VALUES (?,FALSE)";
        connection.query(queryString, [tableName, colName, colVal],
            function (err, result) {
                if (err) throw err;
                callback(result);
            })
    },

    //orm update one burger
    putOneBurger: function (tableName, devVal, idVal, callback) {
        let queryString = "UPDATE ?? SET devoured = ? WHERE id = ? ";
        connection.query(queryString, [tableName, devVal, idVal],
            function (err, result) {
                if (err) throw err;
                callback(result);
            })
    }

}

module.exports = orm;