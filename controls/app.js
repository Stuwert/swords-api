var knex = require('../db/knex');

module.exports = {
  create: function(req, res){
    Swords().insert(req.body).then(function(swords){
      res.status(201).json(swords);
    }).catch(function(error){
      console.log(error);
    })
  },
  readAll: function(req, res){
    Swords().select().then(function(swords){
      res.status(200).json(swords);
    })
  },
  readOne: function(req, res){
    Swords().where('id', req.params.sword_id).first().then(function(swords){
      res.status(200).json(swords);
    })
  },
  update: function(req, res){
    Swords().where('id', req.params.sword_id).update(req.body).then(function(swords){
      res.status(200).json(swords);
    })
  },
  destroy: function(req, res){
    Swords().where('id', req.params.sword_id).del().then(function(swords){
      res.status(200).json(swords);
    })
  }
}

function Swords(){
  return knex('weapons')
}
