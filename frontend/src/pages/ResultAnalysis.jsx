import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageResult from "../components/Analysis/pageResult";
import Button from "../components/button/button";
import "../styles/resultAnalysis.css";

const Teste = () => {
  fetch('/api')
    .then(resultado => {
      console.log(resultado);
    });
}

function ResultAnalysis() {
  useEffect(() => {
    Teste();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <PageResult />
      </div>
      <div>
        <Button trasformButton={true} />

      </div>
      <br />
      <Footer />
    </div>
  );
}

export default ResultAnalysis;
