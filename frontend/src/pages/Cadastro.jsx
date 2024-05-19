import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/cadastro.css";

import { HiOutlineMail } from "react-icons/hi";
import { PiLockKey } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

function Cadastro() {
  return (
    <div>
      <Header />

      <div class="container-cadastro">
        <h1>Cadastro</h1>
        <div className="container-secundario">
          <div className="lado-esquerdo">
            <img src="./img/agrolab.png" alt="logo do projeto" />
            <h2>AgroLab</h2>
          </div>
          <div className="lado-direito">
            <form action="post">

            <FaRegUser size={25} />
              <input type="text" placeholder="Nome:" />
              <br />
              <br />

              <HiOutlineMail size={25} />
              <input type="email" placeholder="E-mail:" />
              <br />
              <br />

              <PiLockKey size={25} />
              <input type="password" placeholder="Senha:" />

              <br />
              <br />
              <button>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cadastro;