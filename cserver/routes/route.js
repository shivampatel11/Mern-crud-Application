import express from 'express';
import {Edituser} from '../controller/user.js';
import {Adduser, Getuser , Updateuser ,Deleteuser}from '../controller/user.js';
const router = express.Router();

router.post("/add" , Adduser);

router.get('/alluser',Getuser)
router.get('/:id' ,Edituser);
router.put("/:id" , Updateuser);
router.delete("/:id",Deleteuser);
export default router;