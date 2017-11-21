var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a wiki listing data');
});

router.get('/details', function(req, res, next) {
  res.send('respond with a wiki details data');
});


module.exports = router;