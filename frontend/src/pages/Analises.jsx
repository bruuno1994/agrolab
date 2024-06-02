import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageResult from "../components/pageResult";
import "../styles/resultAnalysis.css";

const Teste = () => {
  fetch('/api')
    .then(resultado => {
      console.log(resultado);
    });
}

function Analises() {
  useEffect(() => {
    Teste();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <PageResult />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Analises;