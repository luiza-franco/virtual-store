const express = require('express')

const app = express()

app.listen('3000')

  app.get('/products', function (req, res) {
    res.send('listar os produtos');
  });

  app.get('/products/:id', function (req, res) {
    res.send('listar um produto');
  });
   
  app.post('/product', function (req, res) {
    res.send('inserir o produto');
  });
   
  app.put('/product/:id', function (req, res) {
    res.send(`editar o produto ${req.params.id}`);
  });
   
  app.delete('/product/:id', function (req, res) {
    res.send(`excluir o produto ${req.params.id}`);
  });