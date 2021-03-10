const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<p>Lista de jobs</p>')
})

module.exports = router;