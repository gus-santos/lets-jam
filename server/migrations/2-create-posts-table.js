// [Looks ok]

exports.up = (knex) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table
    .integer('author')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table.text('content').notNullable();
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};
  
exports.down = (knex) => {
  return knex.schema.dropTable('posts');
};