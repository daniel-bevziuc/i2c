const { TOP_TABLE, PRODUCTS_TABLE } = require('../tableNames');

exports.up = async (knex) => {
  await knex.schema.createTableIfNotExists(TOP_TABLE, (table) => {
    table.increments().primary();
    table.string('metric').notNullable();
    table.integer('product_id').unsigned();
    table.decimal('exposed', 10, 2);
    table.decimal('control', 10, 2);
    table.decimal('uplift', 10, 2);
    table.decimal('pct_uplift', 5, 2);
  
    table.foreign('product_id').references(`${PRODUCTS_TABLE}.id`).onDelete('cascade');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(TOP_TABLE);
};
