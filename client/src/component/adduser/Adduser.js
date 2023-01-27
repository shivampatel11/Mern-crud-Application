import React ,{useState} from "react";
import Navbar from "../navbar/Navbar";
import './adduser.css';
import { useNavigate } from "react-router-dom";
import { Addusers } from "../../service/api";

export default function Adduser() {

    const [user ,setUser] = useState({
        name:"",
        username:'',
        email:'',
        phone:""
    });

      
const { name, username, email, phone } = user;
 const navigate = useNavigate()
    const handleChange=(e)=>{
       let names = e.target.name;
       let values = e.target.value
       setUser({...user , [names]: values})
       //console.log(user)
    }

    const handleClick=async()=>{
       await Addusers(user)
       navigate("/alluser")
    }

    return (
        <div >
            <div>
            <Navbar/>

            </div>
           
        <div className="adduser">
            <div className="container">
                <div className="form">
                    <h1 className="formname">Add User</h1>
                </div>
                <div className="addfields">
                    <div className="fieldscontainer">

                        <label className="name"> Name :</label>
                        <input type="text" className="input" name="name" value={name} onChange={(e)=>{handleChange(e)}}  /> 
                    </div>
                    <div className="fieldscontainer">
                        <label className="name"> Username :</label>
                        <input type="text" className="input"  name ="username" value = {username} onChange={(e)=>{handleChange(e)}} /> 
                    </div>
                    <div className="fieldscontainer">
                        <label className="name"> E-mail :</label>
                        <input type="text" className="input" name = "email" value={email} onChange={(e)=>{handleChange(e)}}/> 
                    </div>
                    <div className="fieldscontainer">
                        <label className="name"> Phone :</label>
                        <input type="text" className="input" name="phone" value={phone} onChange={(e)=>{handleChange(e)}} /> 
                    </div>
                    <div className="fieldscontainer">
                        <button className="button" onClick={()=>{handleClick()}}>Add user</button>
                    </div>
                </div>



            </div>
        </div>
        </div>
    )
}