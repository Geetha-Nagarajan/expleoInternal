import React from "react";
import { Link } from "react-router-dom";

const  NavBar = () =>{
    return(
<nav>
    <ul>
    <li><Link to="/">Login</Link></li>
    <li><Link to="/signup">Signup</Link></li>
    </ul>
</nav>
    )
}

export default NavBar;