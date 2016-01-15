var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log('at least something works');
  res.status(200).json({message: 'rawr! you did it!'})
});

router.post('/', function(req, res){
  res.status(200).
})

module.exports = router;
