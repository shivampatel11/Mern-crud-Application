import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route.js';
const PORT = 5000;
const app = express();
import ConnectDb from './db/connect.js';
import cors from 'cors';

app.use(cors());
app.use(express.json())
app.use('/',router)

//app.use(bodyParsor.json({extended:true}));
//app.use(bodyParsor.urlencoded({extended:true})); this is just for a knowledge that we can parse our body to json ;

mongoose.connection.on("disconnected" , ()=>{
    console.log("disconnected")
})

mongoose.connection.on("connected" , ()=>{
    console.log("connected")
})
app.listen(5000,()=>{
    ConnectDb()
    console.log("connected")
})