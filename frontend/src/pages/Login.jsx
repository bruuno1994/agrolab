import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import "../styles/login.css";

import { HiOutlineMail } from "react-icons/hi";
import { PiLockKey } from "react-icons/pi";


function Login() {
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const nav = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if(email !== '' && senha !== '') {
      toast.success('Login concluído com sucesso!');
      nav('/Dashboard')
    } else {
      toast.warning('Falha ao efetuar o login!')
    }
  }

  return (
    <div>
      <Header />

      <div class="container-login">
        <h1>Login</h1>
        <div className="container-secundario">
          <div className="lado-esquerdo">
            <img src="./img/agrolab.png" alt="logo do projeto" />
            <h2>AgroLab</h2>
          </div>
          <div className="lado-direito">
            <form>
              <HiOutlineMail size={25} />
              <input 
              type="email" 
              placeholder="E-mail:" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
              />
              <br />
              <br />

              <PiLockKey size={25} />
              <input 
              type="password" 
              placeholder="Senha:" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}

              />

              <br />
              <br />
              <button onClick={handleLogin}> Entrar </button>
               <p>Primeiro acesso? <Link to ='/Cadastro'>Clique aqui</Link></p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;