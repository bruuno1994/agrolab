const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT, {
    });
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
  }
}


connect();

module.exports = connect;