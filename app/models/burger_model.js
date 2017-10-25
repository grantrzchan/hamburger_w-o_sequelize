//Require dependencies
const orm = require("./orm.js");

var burgerModel = {

    findAll: function(){
        orm.getAllBurgers("hamburgers");
    },

    postOne: function(burgNameCol,burgNameVal){
        orm.postOneBurger("hamburgers",burgNameCol,burgNameVal);
    },

    putOne: function(devBoolean,idVal){
        orm.putOneBurger("hamburgers",devBoolean,idVal);
    }
    
}

module.exports = burgerModel;