// [Looks ok]

exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('screenName').notNullable();
    table.text('about');
    table.string('firstName');
    table.string('lastName');
    table.string('postalCode');
    table.string('skills');
    table.string('lookingFor');
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};