const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '12345';
const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost:3306';
const MYSQL_DB = process.env.MYSQL_DB || 'i2c';

module.exports = {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_DB,
};
