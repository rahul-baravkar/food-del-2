import mongoose from "mongoose";

//create useSchema for structure our data 
const userSchema = new mongoose.Schema({
   name:{type:String , required:true},
   email:{type:String , required:true},
   password:{type:String , required:true},
   cartData:{type:Object , default:{}}
} , {minimize:false})

// create model for CRUD opration on database 
const userModel = mongoose.models.user || mongoose.model("user" , userSchema)

export default userModel

// i can export directy 