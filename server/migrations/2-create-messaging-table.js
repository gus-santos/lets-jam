exports.up = (knex) => {
    return knex.schema.createTable('messages', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('quantity').notNullable().defaultTo(0);
      table.string('status').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable('messages');
  };  