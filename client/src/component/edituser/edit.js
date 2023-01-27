import React ,{useState,useEffect} from "react";
import Navbar from "../navbar/Navbar";
import '../adduser/adduser.css';
import { Getuser , Editusers} from "../../service/api";
import { useParams ,useNavigate} from "react-router-dom";

export default function Edituser() {
 
    const [user ,setUser] = useState({
        name:"",
        username:'',
        email:'',
        phone:""
    });

const {id} = useParams();
const navigate = useNavigate();
      
const { name, username, email, phone } = user;
    const handleChange=(e)=>{
       let names = e.target.name;
       let values = e.target.value
       setUser({...user , [names]: values})
       //console.log(user)
    }

    useEffect(()=>{
       loadUser()
    },[])

    const loadUser = async() => {
        const response = await Getuser(id);
        setUser(response.data[0]);
    }

    const handleEdit=async()=>{
       await Editusers(user,id)
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
                    <h1 className="formname">Edit User</h1>
                </div>
                <div className="addfields">
                    <div className="fieldscontainer">

                        <label className="name"> Name :</label>
                        <input type="text" className="input" name="name" value={user.name} onChange={(e)=>{handleChange(e)}}  /> 
                    </div>
                    <div className="fieldscontainer">
                        <label className="name"> Username :</label>
                        <input type="text" className="input"  name ="username" value = {user.username} onChange={(e)=>{handleChange(e)}} /> 
                    </div>
                    <div className="fieldscontainer">
                        <label className="name"> E-mail :</label>
                        <input type="text" className="input" name = "email" value={user.email} onChange={(e)=>{handleChange(e)}}/> 
                    </div>
                    <div className="fieldscontainer">
                        <label className="name"> Phone :</label>
                        <input type="text" className="input" name="phone" value={user.phone} onChange={(e)=>{handleChange(e)}} /> 
                    </div>
                    <div className="fieldscontainer">
                        <button className="button" onClick={()=>{handleEdit()}}>Edituser</button>
                    </div>
                </div>



            </div>
        </div>
        </div>
    )
}