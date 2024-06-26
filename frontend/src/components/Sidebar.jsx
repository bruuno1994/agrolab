import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import "../styles/sidebar.css";

function Sidebar() {
  const nav = useNavigate();
  async function logout(e) {
    e.preventDefault();

    // window.localStorage.clear();
    nav("/");
    toast.success("Obrigado por utilizar o AgroLab !")
  }
  return (
    <>
      <div className="sidebar">
        <img src='./img/agrolab.png' alt='logo do projeto' width={150} />
        <button> <Link to='/Dashboard'> Dashboard </Link> </button>
        <button> <Link to='/MapaGeral'> Mapa Geral </Link> </button>
        <button> <Link to='/CadastroAmostra'> Cadastro </Link> </button>
        <button> <Link to='/Amostra'> Amostras </Link> </button>
        <button> <Link to='/Detalhes'> Detalhes </Link> </button>
        <button onClick={logout}> Sair </button>

      </div>
    </>
  );
}

export default Sidebar;
