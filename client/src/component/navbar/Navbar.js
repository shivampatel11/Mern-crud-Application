import react from 'react';
import './navbar.css';
import Adduser from '../adduser/Adduser';
import Alluser from '../alluser/alluser'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="ncontainer">
                <Link to='/' className="nlink" ><div>CrudApp </div></Link>
                <div className='nuser'>
                    <Link  className = "nlink" to="/alluser"><span className='nuserspan'>All Users</span></Link>
                    <Link className = "nlink nadd" to="/adduser"> <span className='nuserspan'>Add User</span></Link>
                </div>
            </div>

        </div>
    )
}