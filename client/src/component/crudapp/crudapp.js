import React from "react";
import'./crudapp.css';
import Alluser from "../alluser/alluser";
const Crudapp = ()=>{
    return(
        <div className = "crudapp">
            <div className="container">
             <Alluser/>
            </div>
        </div>
    )
}

export default Crudapp;