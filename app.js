const http = require('http');
const express = require('express');

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log('in the middleware')
  // allows the request to continue to the next middleware
  next() 
})

// Middleware
app.use((req, res, next) => {
  console.log('in another the middleware')
  res.send('<h2>Hello from express</h2>');
})

app.listen(3000)