require('dotenv').config();

//const { Pool } = require('pg');
//const isProduction = process.env.NODE_ENV === 'production';

const connectString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pg = require('pg');
const pool = new pg.Pool({
  connectionString: connectString
});

module.exports = { pool };