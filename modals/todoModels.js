import mongoose from "mongoose";
const userSchema= new mongoose.Schema(
    {
    title:{
        type:String,
        required:true,
        },
    name:{
        type:String,
        required:true,
        maxLength:30,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    number:{
        type:String,
        required:true,
    }
},{timestamps:true});

export default mongoose.model('User', userSchema);