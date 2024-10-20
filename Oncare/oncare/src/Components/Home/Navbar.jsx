import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div>
                <Link to={"/"}>OnCare</Link>
            </div>
            <div>

            </div>
        </nav>
    )
}

export default Navbar;