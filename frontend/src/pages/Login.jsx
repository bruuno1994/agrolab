import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";

import { HiOutlineMail } from "react-icons/hi";
import { PiLockKey } from "react-icons/pi";

function Login() {
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
            <form action="post">
              <HiOutlineMail size={25} />
              <input type="email" placeholder="E-mail:" />
              <br />
              <br />

              <PiLockKey size={25} />
              <input type="password" placeholder="Senha:" />

              <br />
              <br />
              <button> Entrar </button>
              <p> Primeiro acesso? <Link to ='/Cadastro'>Clique aqui</Link> </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;