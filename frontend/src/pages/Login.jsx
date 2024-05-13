import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";

function Login() {
  return (
    <div>
      <Header />

      <div class="container-login">
        <h1>Página de Login</h1>
        <div className="container-secundario">
        <div className="lado-esquerdo">
          <img src='./img/agrolab.png' alt='logo do projeto' />
          <h2>AgroLab</h2>
        </div>
        <div className="lado-direito">

        <form action="post">
            <input
              type="email"
              placeholder="E-mail:"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Senha:"
            />
        </form>

        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
