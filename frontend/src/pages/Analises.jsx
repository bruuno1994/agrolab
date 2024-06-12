import React, { useEffect } from "react";

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
      <div>

      </div>
      <br />
    </div>
  );
}

export default Analises;