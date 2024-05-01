import React from 'react';
import '../styles/header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <button><Link to='/'> Home </Link></button>
                <button><Link to='/Login'> Login </Link></button>
                <button><Link to='/QuemSomos'> Quem Somos </Link></button>
            </div>
        </>
    )
}

export default Header