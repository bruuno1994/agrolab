import React from "react";
import { Link } from 'react-router-dom'
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">

    <ul>
        <Link to='/Dashboard'> Dashboard </Link>
        <li>Mapa Geral</li>
        <li>Detalhes</li>
    </ul>

      </div>
    </>
  );
}

export default Sidebar;
