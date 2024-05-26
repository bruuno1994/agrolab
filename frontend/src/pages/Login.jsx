import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/login.css";

import { HiOutlineMail } from "react-icons/hi";
import { PiLockKey } from "react-icons/pi";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const nav = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem('formData'));

    if (savedData) {
      const { email: savedEmail, senha: savedSenha } = savedData;
      if (email === savedEmail && senha === savedSenha) {
        toast.success('Login realizado com sucesso!');
        
         nav('/Dashboard');
      } else {
        toast.warning('E-mail ou senha incorretos!');
      }
    } else {
      toast.error("Erro inesperado, tente novamente!")
    }
  }


  return (
    <div>
      <Header />

      <div className="container-login">
        <h1>Login</h1>
        <div className="container-secundario">
          <div className="lado-esquerdo">
            <img src="./img/agrolab.png" alt="logo do projeto" />
            <h2>AgroLab</h2>
          </div>
          <div className="lado-direito">
            <form>
              <div className="inputs">
                <HiOutlineMail size={25} />
                <input
                  type="email"
                  placeholder="E-mail:"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <br />
              <br />

              <div className="inputs">
                <PiLockKey size={25} />
                <input
                  type="password"
                  placeholder="Senha:"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <br />
              <br />
              <button onClick={handleLogin}> Entrar </button>
              <p>
                Primeiro acesso? <Link to="/Cadastro">Clique aqui</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login