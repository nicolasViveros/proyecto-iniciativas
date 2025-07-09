import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    
    email:{
        type: String,
        required :true,
        trim : true,
        unique : true, 
    },
    password:{
        type: String, 
        required :true,
    },
    username: {
        type:String,
        required :true,
        trim : true,
    },
    
} ,{
timestamps : true
})

export default mongoose.model('User',userSchema)