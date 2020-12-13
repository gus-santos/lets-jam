// [Looks ok]

exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.json('contactInfo').notNullable();
    table.string('userName').notNullable();
    table.string('type').notNullable();
    table.boolean('healthSettings').notNullable().defaultTo(true);
    table.text('about');
    table.string('firstName');
    table.string('lastName');
    table.string('postalCode');
    table.string('favouriteStudio');
    table.json('lookingFor');
    table.json('skills');
    table.json('instruments'); // [Q] FK?
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};