import React, { useEffect ,useState} from "react";
import './alluser.css';
import Navbar from "../navbar/Navbar";
import { Deleteuser, Getusers } from "../../service/api";
import { Link } from "react-router-dom";
export default function Alluser() {
const [data , setdata] = useState([])
    useEffect(() => {
        Getalluser()

    }, [])
   
    
    const Getalluser = async () => {
        let response = await Getusers();
       setdata(response.data)
    }
    console.log(data)

   const handledelete= async(id)=>{
      await Deleteuser(id);
      Getalluser()
   }
    return (
        <div className="alluser">
            <Navbar />
            <div className="tcontainer">
                <table className="table">
                    <thead className="tablehead">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    { data.map((data)=>{
                        return(
                    <tbody key ={data._id}>
                        <tr>
                            <td>{data._id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td><Link  to={`/edit/${data._id}`} ><button className="tbutton" >Edit</button></Link>
                            <button className="tbutton" onClick={()=>handledelete(data._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                     )})}
                </table>
            </div>
        </div>
    )
}