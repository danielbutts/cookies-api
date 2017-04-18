
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cookies', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('mouthfeel').notNullable();
    table.boolean('is_delicious').notNullable();
    table.integer('ingredients').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cookies');
};
