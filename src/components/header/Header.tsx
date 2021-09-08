/* eslint-disable  */
import React from "react";
import {NavLink} from "react-router-dom"

const Header:React.FC=()=>{

    let a:any;
    return(
    <header>
        <nav><ul>
            <li>
            <NavLink   to="/">Home</NavLink>
            </li>
           
            <li>
            <NavLink   to="/about">About</NavLink>
            </li>
            </ul></nav>
    </header>
    )
}


export default Header;