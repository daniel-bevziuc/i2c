const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_DB
} = require('../constants/db');

const connection = `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}/${MYSQL_DB}`;

module.exports = {
  client: 'mysql',
  connection,
  acquireConnectionTimeout: 100000,
  migrations: {
    tableName: 'migrations'
  },
  debug: true
};
