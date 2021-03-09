const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use('/novo', (req, res, next) => {
  console.log('add job')
  res.send('<p>Adicionar Job</p>')
})

app.use('/add-product', (req, res, next) => {
  console.log('add job')
  res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>')
})

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/', (req, res, next) => {
  console.log('list jobs')
  res.send('<p>Lista de jobs</p>')
})

app.listen(3000)