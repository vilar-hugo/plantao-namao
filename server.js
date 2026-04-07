const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir o arquivo principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'plantaonamao.html'));
});

// Rota de saúde para o Railway
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Plantão na Mão',
    version: '1.5.0',
    timestamp: new Date().toISOString()
  });
});

// Qualquer outra rota redireciona para o app
app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Plantão na Mão v1.5.0 rodando na porta ${PORT}`);
});
