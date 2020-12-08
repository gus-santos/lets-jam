exports.up = (knex) => {
    return knex.schema.createTable("messages", (table) => {
      table.increments("id").primary();
      table
      .integer("sender")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
      table
      .integer("addressee")
      .unsigned()
      .notNullable()
      .references("id") // [Q] Can I use the same reference as sender?
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
      table.text("content").notNullable(); // [Q] Text?
      // [Q] Maybe do chatId so that connecting sender and addressee is simpler? Hopefully
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable("messages");
  };