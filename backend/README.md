# Backend do Agrolab

Este é o backend do Agrolab, um sistema de monitoramento agrícola que permite o registro e gerenciamento de dispositivos e seus dados de sensores.

## Requisitos

- Node.js
- MongoDB

## Instalação

1. **Clone este repositório:**

https://github.com/bruuno1994/agrolab/tree/master/backend

2. **Instale as dependências:**

cd agrolab/backend
npm install

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias, como a URL de conexão com o MongoDB.

Exemplo de arquivo `.env`:

PORT=9000
MONGO_CONNECT=sua-url-de-conexao-com-o-mongodb


## Uso

Para iniciar o servidor, execute o seguinte comando:

npm run device


O servidor estará disponível em http://localhost:9000 por padrão (a menos que você tenha especificado uma porta diferente nas variáveis de ambiente).

## Rotas

### Obter todos os dispositivos

GET /devices

Retorna todos os dispositivos cadastrados.

### Criar um novo dispositivo

POST /devices


Cria um novo dispositivo com base nos dados fornecidos no corpo da solicitação.

Exemplo de corpo da solicitação:

```json
{
  "nameResponsable": "Responsável",
  "toConect": true,
  "sensorTemp": "25 C",
  "sensorUmiAr": "50%",
  "lumen": true,
  "sensorSolo1": 30,
  "sensorSolo2": 40,
  "sensorSolo3": 60
}

Atualizar um dispositivo existente

PUT /devices/:id

Atualiza um dispositivo existente com o ID fornecido no parâmetro da URL.

Excluir um dispositivo existente

Atualiza um dispositivo existente com o ID fornecido no parâmetro da URL.

Excluir um dispositivo existente

Exclui um dispositivo existente com o ID fornecido no parâmetro da URL.


