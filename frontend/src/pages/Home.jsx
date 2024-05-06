import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
  return (
    <>
      <div>
        <Header />

        <div className="container">
          <img src="/img/background.jpeg" alt="logo do projeto" />
          <h1>Laboratório AgroLab</h1>
          <h2>Análise de amostras e monitoramento de mudas em estufa</h2>
        </div>
        

        <div className="container2">
          <div className="container2-info">
            <h2>Coleta</h2>
            <h3>Nossa coleta de dados é totalmente automatizada. Basta apenas um Play!</h3>

            <button>Saiba mais</button>
          </div>

          <img src="/img/foto1.jpeg" alt="imagem um do projeto" width={400} />
        </div>
        <br />

        <div className="container2">

          <img src="/img/foto2.png" alt="imagem dois do projeto" width={400} />

          <div className="container2-info">
            <h2>Análise</h2>
            <h3>Nós da AgroLab nos fundamentamoms em metodologias de análise de solo, compatíveis e apropriadas a produção agrícola brasileira, gerando resultados que auxiliem da melhor forma na tomada de decisões.</h3>

            <button>Saiba mais</button>
          </div>

        </div>
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Home;
