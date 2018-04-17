var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
   	first_name: String,
    	middle_name: String,
      	last_name: String,
        	phone: String,
          	gender: String,
    password: String,
    email: String,
});

module.exports = mongoose.model("SighUp", UserSchema);
