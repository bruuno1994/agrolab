import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Result.scss";

const CarregarDados = async () => {
  try {
    const response = await fetch("http://localhost:5000/samples/records");
    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }
    const resultado = await response.json();
    return resultado;
  } catch (error) {
    console.error(error);
    return [];
  }
};

function Detalhes() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarregarDados();
      setDados(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="plantation-analysis">
        <h1>Análise de Plantação</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Amostra</th>
              <th>Data</th>
              <th>Exposição à Luz</th>
              <th>Umidade de Solo</th>
              <th>Umidade do Ar</th>
              <th>Temperatura Ambiente</th>
              <th>Responsável</th>
            </tr>
          </thead>
          <tbody>
            {dados.slice(0, 72).map((item, index) => (
              <tr key={index}>
                <td>{item.Sample.sample_name}</td>
                <td>{item.creation_date}</td>
                <td>{item.lumen ? "Sim" : "Não"}</td>
                <td>{item.sensor_soil}%</td>
                <td>{item.sensor_humidity}%</td>
                <td>{item.sensor_temperature}°C</td>
                <td>{item.Sample.name_responsible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
}

export default Detalhes;
