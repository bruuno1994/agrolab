import React from "react";
import Header from "../components/Header";
//import Footer from "../components/Footer";
import '../styles/home.css'

function Home() {
    return (
      <>
        <div>
          <Header />

          <div className="container">
                  <img src='/img/background.jpeg' alt="logo do projeto"/>
                  <h1>Laboratório AgroLab</h1>
                  <h2>Análise de amostras e monitoramento de mudas em estufa</h2>
              </div>
        </div>
      </>
    );
  }
  
  export default Home;