const { WEEKLY_TABLE, PRODUCTS_TABLE } = require('../tableNames');

exports.up = async (knex) => {
  await knex.schema.createTableIfNotExists(WEEKLY_TABLE, (table) => {
    table.increments().primary();
    table.integer('product_id').unsigned();
    table.dateTime('week_commencing').notNullable();
    table.integer('exposed');
    table.integer('control');
  
    table.foreign('product_id').references(`${PRODUCTS_TABLE}.id`).onDelete('cascade');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(WEEKLY_TABLE);
};
