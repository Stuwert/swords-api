
exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapons', function(table){
    table.increments();
    table.string('name');
    table.string('combat_type');
    table.integer('power');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weapons');
};
