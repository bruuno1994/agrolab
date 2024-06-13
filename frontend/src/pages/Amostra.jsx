import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Result.scss";

const CarregarDados = async () => {
  try {
    const response = await fetch("http://localhost:5000/samples");
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

function Amostra() {
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
        <h1>Amostras</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Nome da Amostra</th>
              <th>Responsável</th>
            </tr>
          </thead>
          <tbody>
            {dados.slice(0, 72).map((item, index) => (
              <tr key={index}>
                <td>{item.sample_name}</td>                
                <td>{item.name_responsible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
}

export default Amostra;
