const knex = require('knex');
const config = require('../configuration/knexfile');

class DatabaseConnection {
  constructor() {
    this.knex = knex(config);
  }
}

module.exports = new DatabaseConnection();
