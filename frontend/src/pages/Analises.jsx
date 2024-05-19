import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageResult from "../components/pageResult";
import Button from "../components/button";
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
        <Button trasformButton={true} />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Analises;