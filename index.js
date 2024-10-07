const cors = require('cors');
const express = require('express');
 
const app = express();
app.use(cors()); // Permite CORS
 
const filmes = require('./src/data/filmes.json');
 
// Rota para retornar filmes
app.get("/filmes", (req, res) => {
  return res.json(filmes);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor está funcionando!");
});