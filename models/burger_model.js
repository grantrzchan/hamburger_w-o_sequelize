//Require dependencies
const orm = require("../config/orm.js");

var burgerModel = {

    findAll: function(){
        orm.getAllBurgers("hamburgers",(res)=>{
            return res;
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