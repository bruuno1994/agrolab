import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
// import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

import "../styles/dashboard.css";

function MapaGeral() {
  const data = [
    ["Horas", "Temperatura", "Umidade do Ar"],
    [0, 8, 15],
    [3, 6, 20],
    [6, 9, 25],
    [9, 12, 30],
    [12, 20, 25],
    [15, 23, 40],
    [18, 29, 30],
    [21, 27, 25],
    [24, 21, 15],
  ];

  const options = {
    // Material design options
    chart: {
      title: "Análise da Umidade do Solo",
      subtitle: "baseado na temperatura e na umidade do ar",
    }

  };

  const [nomeUsuario, setNomeUsuario] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("formData");
    if (userData) {
      const { nome } = JSON.parse(userData);

      setNomeUsuario(nome);
    }
  }, []);

  return (
    <>
      <div className="container-dashboard">
        <h1>{nomeUsuario}, esses são os dados da sua amostra</h1>
        <Sidebar />

        <div className="grafico">
          <Chart chartType="Line" data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default MapaGeral;