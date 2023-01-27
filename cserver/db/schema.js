
import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,

    }

})

let user = mongoose.model("model" , userSchema);
export default user