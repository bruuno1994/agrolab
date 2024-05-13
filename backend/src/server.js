const express = require('express');
const app = express();
const api = require('./routes/');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json()); //
app.use('/api', api);
const PORT = process.env.PORT; // Se a variável de ambiente PORT não estiver definida, o servidor será iniciado na porta 3080

app.get('/', (req, res) => {
    res.json({
        success: true
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
