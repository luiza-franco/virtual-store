const express = require('express')

const app = express()

app.listen('3000')


  app.get('/products', function (req, res) {
    res.send('Listar os produtos');
  });

  app.get('/product', function (req, res) {
    res.send('Listar o produto');
  });
   
  app.post('/product', function (req, res) {
    res.send('Inserir o produto');
  });
   
  app.put('/product/:id', function (req, res) {
    res.send(`Editar o produto ${req.params.id}`);
  });
   
  app.delete('/product/:id', function (req, res) {
    res.send(`Excluir o produto ${req.params.id}`);
  });