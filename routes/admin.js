const express = require('express');

const router = express.Router();

router.get('/novo', (req, res, next) => {
  res.send('<p>Adicionar oferta de emprego</p>')
})

module.exports = router;