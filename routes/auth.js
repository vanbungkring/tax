var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/', function(req,res) {
  console.log('asu');
})
module.exports = router;
