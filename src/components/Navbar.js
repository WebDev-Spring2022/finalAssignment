import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className= "navbar">
            <div className="navbar-container">
                <ul className="nav-menu"> 
                    <li className='nav-item'>
                        <Link to="/" className='nav-links'> Home </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/instructors" className='nav-links'> Instructors </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/courses" className='nav-links'> Courses </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;