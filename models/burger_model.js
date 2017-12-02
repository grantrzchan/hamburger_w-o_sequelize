//Require dependencies
const orm = require("../config/orm.js");

var burgerModel = {

    findAll: function(callback){
        orm.getAllBurgers("hamburgers",(res)=>{
            callback(res);
        });
    },

    postOne: function(burgNameCol,burgNameVal){
        orm.postOneBurger("hamburgers",burgNameCol,burgNameVal,(res)=>{
            return res;
        });
    },

    putOne: function(devBoolean,idVal){
        orm.putOneBurger("hamburgers",devBoolean,idVal,(res)=>{
            return res;
        });
    }
    
}

module.exports = burgerModel;