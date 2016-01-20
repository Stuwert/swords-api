var express = require('express');
var router = express.Router();
var controller = require('../controls/app')

router.get('/', function(req, res){
  controller.readAll(req, res);
});

router.post('/', function(req, res){
  controller.create(req, res);
})

router.get('/:sword_id', function(req, res){
  controller.readOne(req, res);
})

router.put('/:sword_id', function(req, res){
  controller.update(req, res);
})

router.delete('/:sword_id', function(req, res){
  controller.destroy(req, res);
})

module.exports = router;
