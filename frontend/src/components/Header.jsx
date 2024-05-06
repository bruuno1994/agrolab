import React from 'react';
import '../styles/header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <img src='./img/agrolab.png' alt='logo do projeto' width={150} />
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/Equipe'> Equipe </Link></li>
                    <li><Link to='/Analise'> Análise que Fazemos </Link></li>
                    <li><Link to='/Contato'> Contato </Link></li>
                    <li><Link to='/Login'> Login </Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header