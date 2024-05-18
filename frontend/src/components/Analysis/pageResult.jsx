import React from 'react';
import '../../styles/pageResult.scss';

function PageResult() {
  return (
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
            <th>Umidade Ambiente</th>
            <th>Temperatura Média</th>
            <th>Data Término</th>
            <th>Responsável</th>
          </tr>
        </thead>
        <tbody>
          {/* Aqui você pode adicionar linhas de amostra */}
          <tr>
            <td>Amostra 1</td>
            <td>01/05/2024</td>
            <td>8 horas</td>
            <td>45%</td>
            <td>60%</td>
            <td>22°C</td>
            <td>15/05/2024</td>
            <td>João Silva</td>
          </tr>
          {/* Adicione mais linhas conforme necessário */}
        </tbody>
      </table>
    </div>
  );
}

export default PageResult;
