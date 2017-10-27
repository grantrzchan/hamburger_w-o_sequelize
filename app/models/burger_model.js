//Require dependencies
const orm = require("../config/orm.js");

var burgerModel = {

    findAll: function(callback){
        orm.getAllBurgers("hamburgers",(res)=>{
            callback(res);
        });
    },

    postOne: function(burgNameCol,burgNameVal,callback){
        orm.postOneBurger("hamburgers",burgNameCol,burgNameVal,(res)=>{
            callback(res);
        });
    },

    putOne: function(devBoolean,idVal,callback){
        orm.putOneBurger("hamburgers",devBoolean,idVal,(res)=>{
            callback(res);
        });
    }
    
}

module.exports = burgerModel;