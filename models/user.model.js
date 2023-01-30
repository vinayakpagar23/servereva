const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const userSchema = new mongoose.Schema({
    user_id : {type : Number},
    name : {type : String, required : true},
    email : {type : String, required : true},
    gender : {type : String, required : true},
    password : {type : String, required : true}, 
})

const UserModel = mongoose.model("user", userSchema)


module.exports = {
    UserModel
}