var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Buan' });
});

router.get('/hotel', function(req, res, next) {
  res.render('index', { title: 'Buan' });
});

module.exports = router;
