import React from "react";
import axios from 'axios';

const url="http://localhost:5000";
export const Addusers = async(data)=>{
    try{
        return await axios.post(`${url}/add` , data)
    }catch(err){
      console.log(err)
    }
}

export const Getusers = async()=>{
  try{
     return await axios.get(`${url}/alluser`)
  }catch(err){
    console.log(err)
  }
}

export const Getuser=async(id)=>{
  try{
    return await axios.get(`${url}/${id}`)

  }catch(err){
    console.log(err)
  }
}

export const Editusers=async(user,id)=>{
  try{
       return await axios.put(`${url}/${id} ` , user)
  }catch(err){
    console.log(err)
  }
}


export const Deleteuser = async(id)=>{
  try{
    return await axios.delete(`${url}/${id}`)
  }catch(err){
    console.log(err)
  }
}