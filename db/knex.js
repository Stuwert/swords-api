var environment = process.env.DATABASE || 'development';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);
