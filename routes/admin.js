const express = require("express");

const router = express.Router();
// admin/novo >>> GET
router.get("/novo", (req, res, next) => {
  res.send(`
  <p>Adicionar oferta de emprego</p>
  <form method="POST" action="/admin/novo"><input type="text" placeholder="Nome da empresa" name="title" /><button>Salvar</button></form>
  `);
});

router.post("/novo", (req, res, next) => {
  console.log(res);
  res.redirect("/");
});

module.exports = router;
