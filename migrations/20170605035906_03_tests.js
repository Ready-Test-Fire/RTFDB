
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tests', function(table) {
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tests');
};
