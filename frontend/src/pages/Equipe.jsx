import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/equipe.css";

import { SiFacebook } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

function Equipe() {
  return (
    <>
      <Header />
      <div>
        <h2>Conheça a nossa equipe</h2>
        <div className="conteudo">

          <div className="equipe">
            <div className="card">
              <div className="card-image">
                <img src="/img/bruno.jpeg" alt="Bruno" />
              </div>
              <div className="card-title">
                <h3>Bruno Vinicius</h3>
                <p>Age: 29 Years</p>
                <p>Office: Front-End / Mobile Developer</p>
              </div>
              <div className="icons">
                <Link to=''> <SiFacebook /> </Link>
                <Link to='https://www.linkedin.com/in/bruno-vinicius-de-laia-silva/' target="_blank"> <SiLinkedin /> </Link>
                <Link to=''> <SiGithub /> </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="/img/marlon.jpeg" alt="Marlon" />
              </div>
              <div className="card-title">
                <h3>Marlon Vinicius</h3>
                <p>Age: 30 Years</p>
                <p>Office: Back-End / Mobile Developer</p>
              </div>
              <div className="icons">
              <Link to=''> <SiFacebook /> </Link>
                <Link to='https://www.linkedin.com/in/bruno-vinicius-de-laia-silva/' target="_blank"> <SiLinkedin /> </Link>
                <Link to=''> <SiGithub /> </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="/img/gabriel.jpg" alt="Gabriel" />
              </div>
              <div className="card-title">
                <h3>Gabriel Araújo</h3>
                <p>Age: 29 Years</p>
                <p>Office: Product Owner</p>
              </div>
              <div className="icons">
              <Link to=''> <SiFacebook /> </Link>
                <Link to='https://www.linkedin.com/in/bruno-vinicius-de-laia-silva/' target="_blank"> <SiLinkedin /> </Link>
                <Link to=''> <SiGithub /> </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="/img/felipe.png" alt="Felipe" />
              </div>
              <div className="card-title">
                <h3>Felipe Tardivo</h3>
                <p>Age: 40 Years</p>
                <p>Office: Data Base Analyst</p>
              </div>
              <div className="icons">
              <Link to=''> <SiFacebook /> </Link>
                <Link to='https://www.linkedin.com/in/bruno-vinicius-de-laia-silva/' target="_blank"> <SiLinkedin /> </Link>
                <Link to=''> <SiGithub /> </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="/img/matheus.jpeg" alt="Matheus" />
              </div>
              <div className="card-title">
                <h3>Matheus Mancio</h3>
                <p>Age: 35 Years</p>
                <p>Office: Mobile Developer</p>
              </div>
              <div className="icons">
              <Link to=''> <SiFacebook /> </Link>
                <Link to='https://www.linkedin.com/in/bruno-vinicius-de-laia-silva/' target="_blank"> <SiLinkedin /> </Link>
                <Link to=''> <SiGithub /> </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Equipe;
