exports.up = (knex) => {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('position').notNullable().defaultTo('Store Manager');
      table.string('manager').notNullable();
      table.string('address').notNullable();
      table.string('phone').notNullable();
      table.string('email').notNullable();
      table.json('categories').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable('users');
  };  