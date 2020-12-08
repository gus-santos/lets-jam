exports.up = (knex) => {
    return knex.schema.createTable("instruments", (table) => {
      table.increments("id").primary();
      table
      .integer("owner")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
      table.string("make").notNullable();
      table.string("model").notNullable();
      table.string("serial").notNullable();
      table.json("photo"); // [Q] Can I use JSON for a photo array? Is this array a photo array or a URL one?
      table.integer("year").notNullable();
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable("instruments");
  };