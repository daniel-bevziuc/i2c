const { PRODUCTS_TABLE } = require('../tableNames');

exports.up = async (knex) => {
  await knex.schema.createTableIfNotExists(PRODUCTS_TABLE, (table) => {
    table.increments().primary();
    table.string('name').unique().notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(PRODUCTS_TABLE);
};
