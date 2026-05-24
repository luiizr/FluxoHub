var express = require('express');
var router = express.Router();

/* GET repositories listing. */
router.get('/', function(req, res, next) {
  res.send('Olá, esta é a rota de repositórios!');
});

router.post('/', function(req, res, next) {
  // Testar Swagger
  res.send('Repositório criado com sucesso!');
});

router.put('/:id', function(req, res, next) {
  // Testar Swagger
  res.send('Repositório atualizado com sucesso!');
});

router.delete('/:id', function(req, res, next) {
  // Testar Swagger
  res.send('Repositório excluído com sucesso!');
});


module.exports = router;