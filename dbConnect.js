require('dotenv').config();
const envName = process.env.NODE_ENV;
var dbURL = '';

if(envName==='development'){
  dbURL = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DEV_DB_DATABASE}`;
}
else if(envName==='test'){
  dbURL = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.TEST_DB_DATABASE}`;
}
else if(envName==='prod'){
  dbURL = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.PROD_DB_DATABASE}`;
}

const connectString = dbURL;

const pg = require('pg');
const pool = new pg.Pool({
  connectionString: connectString
});

module.exports = { pool };