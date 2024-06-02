import React, { useEffect, useState } from "react";
// import { Chart } from "react-google-charts";
// import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

import "../styles/dashboard.css";

function Dashboard() {
  
  const [nomeUsuario, setNomeUsuario] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("formData");
    if (userData) {
      const { nome } = JSON.parse(userData);

      setNomeUsuario(nome);
    }
  }, []);

  return (
    <>
      <div className="container-dashboard">
        <h1>Bem-vindo(a), {nomeUsuario}!</h1>
        <h2>O que você deseja fazer hoje?</h2>
        <Sidebar />

      </div>
    </>
  );
}

export default Dashboard;