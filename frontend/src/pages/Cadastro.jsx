import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import "../styles/cadastro.css";

import { HiOutlineMail } from "react-icons/hi";
import { PiLockKey } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

function Cadastro() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const nav = useNavigate();

  async function handleCadastro(e) {
    e.preventDefault();

    if(nome !== ''&& email !== '' && senha !== '') {
      console.log(nome);
      console.log(email);
      console.log(senha);
      toast.success('Cadastro realizado com sucesso!');
      nav('/Login')
    } else {
      toast.warning('Falha ao efetuar o cadastro!')
    }
  }

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
              <input 
              type="text" 
              placeholder="Nome:" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              
              />
              <br />
              <br />

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
              <button onClick={handleCadastro}>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cadastro;