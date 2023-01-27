import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const ConnectDb = async()=>{
    try{
           await mongoose.connect(process.env.MONGO);
           
    }catch(err){
        console.log(err)
    }
}

export default ConnectDb;