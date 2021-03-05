const express = require('express');

const app = express();

app.use('/novo', (req, res, next) => {
  console.log('add job')
  res.send('<p>Adicionar Job</p>')
})

app.use('/', (req, res, next) => {
  console.log('list jobs')
  res.send('<p>Lista de jobs</p>')
})

app.listen(3000)