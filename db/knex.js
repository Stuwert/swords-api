var environment = process.env.DATABASE || 'development';
var config = require('../knexfile')[environment];
module.exports = require('knex')(config);
