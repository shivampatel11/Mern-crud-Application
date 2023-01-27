import User from '../db/schema.js';

export const Adduser =async(req,res)=>{
     try{
         let user =  new User(req.body);
           let resp = await user.save();
           console.log(res);
           res.status(200).json(resp);
     }catch(err){
      res.status(404).json(err)
     } 
}

export const Getuser=async(req,res)=>{
   try{
      let user = await User.find();
      res.status(200).json(user)
      console.log(user)

   }catch(err){
      res.status(404).json(err)
   }
}

export const Edituser = async(req,res)=>{
   try{ 

      let data = await User.find({_id :req.params.id})
      res.status(200).json(data);
      console.log(data)
   }catch(err){
      res.status(404).json(err)
   }
};

export const Updateuser = async(req,res)=>{
    
   try{
         let user = await  User.updateOne({_id : req.params.id} , {$set:req.body});
         res.status(200).json(user)
   }catch(err){
      res.status(404).json(err);
   }
};

export const Deleteuser = async(req,res)=>{
   try{
        let user = await User.deleteOne({_id:req.params.id});
        res.status(200).json({message:"user deleted successfully"})
   }catch(err){
      res.status>(404).json(err)
   }
}