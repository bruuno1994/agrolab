import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/cadastro.css";

import { HiOutlineMail } from "react-icons/hi";
import { PiLockKey } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

function Cadastro() {

  const nav = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (formData.nome !== "" && formData.email !== "" && formData.senha !== "" ) {
      localStorage.setItem('formData', JSON.stringify(formData));

      console.log(formData);
      toast.success("Cadastro realizado com sucesso!");
      nav("/Login");
    } else {
      console.log(formData);
      toast.warning('Falha ao efetuar o cadastro!');
    }
  }

  function handleVoltar() {
    nav('/login')
  }

  return (
    <div>
      <Header />

      <div className="container-cadastro">
        <h1>Cadastro</h1>
        <div className="container-secundario">
          <div className="lado-esquerdo">
            <img src="./img/agrolab.png" alt="logo do projeto" />
            <h2>AgroLab</h2>
          </div>
          <div className="lado-direito">
            <form action="post">
              <div className="inputs">
                <FaRegUser size={25} />
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome:"
                  value={formData.nome}
                  onChange={handleInputChange}
                />
              </div>
              <br />
              <br />

              <div className="inputs">
                <HiOutlineMail size={25} />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail:"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <br />
              <br />

              <div className="inputs">
                <PiLockKey size={25} />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha:"
                  value={formData.senha}
                  onChange={handleInputChange}
                />
              </div>

              <br />
              <br />
              <div className="buttons">
              <button onClick={handleCadastro}>Cadastrar</button>
              <button onClick={handleVoltar}>Voltar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cadastro;
