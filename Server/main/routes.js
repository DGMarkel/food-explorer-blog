var express = require('express');
var router = express.Router();

router.get('/api/hello', (req, res) => {
  console.log(req, res)
  res.json('hello, world')
});

module.exports = router
